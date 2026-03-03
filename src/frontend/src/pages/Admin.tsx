import { type Inquiry, UserRole } from "@/backend.d";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useActor } from "@/hooks/useActor";
import { useInternetIdentity } from "@/hooks/useInternetIdentity";
import { Principal } from "@icp-sdk/core/principal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  AlertCircle,
  BookOpen,
  Calendar,
  Download,
  Eye,
  EyeOff,
  Inbox,
  Loader2,
  LogOut,
  Mail,
  Phone,
  RefreshCw,
  Shield,
  Trash2,
  UserCog,
} from "lucide-react";
import { useCallback, useState } from "react";
import { toast } from "sonner";

// ─── Login Gate ─────────────────────────────────────────────────────────────

function LoginGate() {
  const { login, isLoggingIn, isInitializing } = useInternetIdentity();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl shadow-card border border-border p-8 w-full max-w-sm text-center">
        {/* MIT Logo / Branding */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: "oklch(var(--navy))" }}
        >
          <Shield className="w-8 h-8 text-gold" />
        </div>
        <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Marik Institute of Technology
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Admin Portal
        </h1>
        <p className="text-muted-foreground text-sm mb-8">
          Sign in with your Internet Identity to access the admin dashboard.
        </p>

        {isInitializing ? (
          <div
            data-ocid="admin.loading_state"
            className="flex items-center justify-center gap-2 text-muted-foreground text-sm"
          >
            <Loader2 className="w-4 h-4 animate-spin" />
            Initializing…
          </div>
        ) : (
          <Button
            data-ocid="admin.login_button"
            onClick={login}
            disabled={isLoggingIn}
            className="w-full bg-navy hover:bg-navy-dark text-white font-semibold py-2.5 rounded-lg"
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Signing in…
              </>
            ) : (
              "Sign in with Internet Identity"
            )}
          </Button>
        )}
      </div>
    </div>
  );
}

// ─── Access Denied ───────────────────────────────────────────────────────────

function AccessDenied({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div
        data-ocid="admin.error_state"
        className="bg-card rounded-2xl shadow-card border border-destructive/30 p-8 w-full max-w-sm text-center"
      >
        <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8 text-destructive" />
        </div>
        <h2 className="text-xl font-bold text-foreground mb-2">
          Access Denied
        </h2>
        <p className="text-muted-foreground text-sm mb-6">
          Your account does not have admin privileges. Please contact the system
          administrator.
        </p>
        <Button
          data-ocid="admin.logout_button"
          variant="outline"
          onClick={onLogout}
          className="w-full"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}

// ─── Format helpers ──────────────────────────────────────────────────────────

function formatDate(ts: bigint): string {
  // ts is nanoseconds since epoch
  const ms = Number(ts / BigInt(1_000_000));
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(ms));
}

function truncate(str: string, len = 60): string {
  return str.length > len ? `${str.slice(0, len)}…` : str;
}

// ─── Delete Confirm Dialog ───────────────────────────────────────────────────

function DeleteDialog({
  inquiry,
  onConfirm,
  isPending,
  index,
}: {
  inquiry: Inquiry;
  onConfirm: () => void;
  isPending: boolean;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          data-ocid={`admin.inquiry.delete_button.${index}`}
          variant="ghost"
          size="sm"
          className="h-7 w-7 p-0 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
          title="Delete inquiry"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </Button>
      </DialogTrigger>
      <DialogContent data-ocid="admin.dialog">
        <DialogHeader>
          <DialogTitle>Delete Inquiry</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete the inquiry from{" "}
            <strong>{inquiry.fullName}</strong>? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            data-ocid="admin.inquiry.cancel_button"
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            data-ocid="admin.inquiry.confirm_button"
            variant="destructive"
            disabled={isPending}
            onClick={() => {
              onConfirm();
              setOpen(false);
            }}
          >
            {isPending ? (
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : null}
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ─── CSV Export ──────────────────────────────────────────────────────────────

function exportCSV(inquiries: Inquiry[]) {
  const headers = [
    "ID",
    "Name",
    "Email",
    "Phone",
    "Program",
    "Message",
    "Date",
    "Status",
  ];
  const rows = inquiries.map((inq) => [
    inq.id.toString(),
    `"${inq.fullName.replace(/"/g, '""')}"`,
    inq.email,
    inq.phone,
    `"${inq.program.replace(/"/g, '""')}"`,
    `"${inq.message.replace(/"/g, '""')}"`,
    formatDate(inq.timestamp),
    inq.isRead ? "Read" : "Unread",
  ]);

  const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join(
    "\n",
  );
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `mit-inquiries-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ─── Inquiry Table Row ───────────────────────────────────────────────────────

function InquiryRow({
  inquiry,
  index,
  onToggleRead,
  onDelete,
  isTogglePending,
  isDeletePending,
}: {
  inquiry: Inquiry;
  index: number;
  onToggleRead: (id: bigint, current: boolean) => void;
  onDelete: (id: bigint) => void;
  isTogglePending: boolean;
  isDeletePending: boolean;
}) {
  return (
    <TableRow
      data-ocid={`admin.inquiry.item.${index}`}
      className={inquiry.isRead ? "" : "bg-navy-light/15 font-medium"}
    >
      {/* Status dot */}
      <TableCell className="w-8">
        <span
          className={`inline-block w-2 h-2 rounded-full ${
            inquiry.isRead ? "bg-gray-300" : "bg-navy"
          }`}
          title={inquiry.isRead ? "Read" : "Unread"}
        />
      </TableCell>
      <TableCell className="max-w-[120px] truncate font-medium text-foreground text-sm">
        {inquiry.fullName}
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Mail className="w-3 h-3 flex-shrink-0" />
          <span className="truncate max-w-[160px]">{inquiry.email}</span>
        </div>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
        <div className="flex items-center gap-1">
          <Phone className="w-3 h-3 flex-shrink-0" />
          {inquiry.phone}
        </div>
      </TableCell>
      <TableCell className="text-sm">
        <div className="flex items-center gap-1 text-muted-foreground">
          <BookOpen className="w-3 h-3 flex-shrink-0" />
          <span className="truncate max-w-[140px]">{inquiry.program}</span>
        </div>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground max-w-[200px]">
        {truncate(inquiry.message)}
      </TableCell>
      <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3 flex-shrink-0" />
          {formatDate(inquiry.timestamp)}
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-1">
          <Button
            data-ocid={`admin.inquiry.toggle.${index}`}
            variant="ghost"
            size="sm"
            disabled={isTogglePending}
            className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground hover:bg-foreground/10"
            title={inquiry.isRead ? "Mark unread" : "Mark read"}
            onClick={() => onToggleRead(inquiry.id, inquiry.isRead)}
          >
            {isTogglePending ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : inquiry.isRead ? (
              <EyeOff className="w-3.5 h-3.5" />
            ) : (
              <Eye className="w-3.5 h-3.5" />
            )}
          </Button>
          <DeleteDialog
            inquiry={inquiry}
            onConfirm={() => onDelete(inquiry.id)}
            isPending={isDeletePending}
            index={index}
          />
        </div>
      </TableCell>
    </TableRow>
  );
}

// ─── Admin Dashboard ─────────────────────────────────────────────────────────

function AdminDashboard() {
  const { clear } = useInternetIdentity();
  const { actor, isFetching: actorFetching } = useActor();
  const queryClient = useQueryClient();

  const [assignPrincipal, setAssignPrincipal] = useState("");
  const [assignError, setAssignError] = useState("");

  // Fetch all inquiries
  const {
    data: inquiries = [],
    isLoading: inquiriesLoading,
    isError: inquiriesError,
    refetch,
    isFetching: inquiriesFetching,
  } = useQuery<Inquiry[]>({
    queryKey: ["admin-inquiries"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllInquiries();
    },
    enabled: !!actor && !actorFetching,
  });

  // Fetch unread count
  const { data: unreadCount = BigInt(0) } = useQuery<bigint>({
    queryKey: ["admin-unread-count"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getUnreadInquiryCount();
    },
    enabled: !!actor && !actorFetching,
  });

  // Mark read/unread mutation
  const toggleReadMutation = useMutation({
    mutationFn: async ({ id, isRead }: { id: bigint; isRead: boolean }) => {
      if (!actor) throw new Error("No actor");
      await actor.markInquiryRead(id, !isRead);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["admin-inquiries"] });
      void queryClient.invalidateQueries({ queryKey: ["admin-unread-count"] });
    },
    onError: () => toast.error("Failed to update inquiry status."),
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("No actor");
      await actor.deleteInquiry(id);
    },
    onSuccess: () => {
      toast.success("Inquiry deleted successfully.");
      void queryClient.invalidateQueries({ queryKey: ["admin-inquiries"] });
      void queryClient.invalidateQueries({ queryKey: ["admin-unread-count"] });
    },
    onError: () => toast.error("Failed to delete inquiry."),
  });

  // Assign role mutation
  const assignRoleMutation = useMutation({
    mutationFn: async (principalStr: string) => {
      if (!actor) throw new Error("No actor");
      let principal: Principal;
      try {
        principal = Principal.fromText(principalStr);
      } catch {
        throw new Error("Invalid Principal ID");
      }
      await actor.assignCallerUserRole(principal, UserRole.admin);
    },
    onSuccess: () => {
      toast.success("Admin role assigned successfully.");
      setAssignPrincipal("");
      setAssignError("");
    },
    onError: (err: Error) => {
      const msg = err.message || "Failed to assign role.";
      setAssignError(msg);
      toast.error(msg);
    },
  });

  const handleRefresh = useCallback(() => {
    void refetch();
    void queryClient.invalidateQueries({ queryKey: ["admin-unread-count"] });
  }, [refetch, queryClient]);

  const handleAssign = () => {
    if (!assignPrincipal.trim()) {
      setAssignError("Principal ID is required.");
      return;
    }
    setAssignError("");
    assignRoleMutation.mutate(assignPrincipal.trim());
  };

  const totalCount = inquiries.length;
  const unreadNum = Number(unreadCount);

  const sortedInquiries = [...inquiries].sort((a, b) =>
    Number(b.timestamp - a.timestamp),
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header Bar */}
      <header
        className="flex items-center justify-between px-4 sm:px-6 py-3 shadow-sm"
        style={{ background: "oklch(var(--navy))" }}
      >
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-gold" />
          <span className="font-bold text-white text-sm sm:text-base">
            MIT Admin Panel
          </span>
          {unreadNum > 0 && (
            <Badge className="bg-gold text-navy-dark text-xs font-bold px-2 py-0.5">
              {unreadNum} unread
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button
            data-ocid="admin.refresh_button"
            variant="ghost"
            size="sm"
            onClick={handleRefresh}
            disabled={inquiriesFetching}
            className="text-white/80 hover:text-white hover:bg-white/10 h-8 px-2"
          >
            <RefreshCw
              className={`w-4 h-4 ${inquiriesFetching ? "animate-spin" : ""}`}
            />
            <span className="hidden sm:inline ml-1.5">Refresh</span>
          </Button>
          <Button
            data-ocid="admin.export_csv_button"
            variant="ghost"
            size="sm"
            onClick={() => exportCSV(inquiries)}
            disabled={inquiries.length === 0}
            className="text-white/80 hover:text-white hover:bg-white/10 h-8 px-2"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline ml-1.5">Export CSV</span>
          </Button>
          <Button
            data-ocid="admin.logout_button"
            variant="ghost"
            size="sm"
            onClick={clear}
            className="text-white/80 hover:text-white hover:bg-white/10 h-8 px-2"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline ml-1.5">Sign Out</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-screen-xl mx-auto w-full px-4 sm:px-6 py-6 space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="bg-card rounded-xl border border-border p-4 shadow-xs">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Total Inquiries
            </div>
            <div className="text-3xl font-bold text-foreground">
              {totalCount}
            </div>
          </div>
          <div className="bg-card rounded-xl border border-border p-4 shadow-xs">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Unread
            </div>
            <div className="text-3xl font-bold text-gold">{unreadNum}</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-4 shadow-xs col-span-2 sm:col-span-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Read
            </div>
            <div className="text-3xl font-bold text-muted-foreground">
              {totalCount - unreadNum}
            </div>
          </div>
        </div>

        {/* Inquiries Table */}
        <div className="bg-card rounded-xl border border-border shadow-xs overflow-hidden">
          <div className="px-4 py-3 border-b border-border flex items-center justify-between">
            <h2 className="font-bold text-foreground flex items-center gap-2">
              <Inbox className="w-4 h-4 text-gold" />
              Inquiries
            </h2>
          </div>

          {inquiriesLoading ? (
            <div data-ocid="admin.loading_state" className="p-6 space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-10 w-full rounded-md" />
              ))}
            </div>
          ) : inquiriesError ? (
            <div
              data-ocid="admin.error_state"
              className="p-8 text-center text-muted-foreground flex flex-col items-center gap-2"
            >
              <AlertCircle className="w-8 h-8 text-destructive" />
              <p className="text-sm">
                Failed to load inquiries. Try refreshing.
              </p>
              <Button variant="outline" size="sm" onClick={handleRefresh}>
                Retry
              </Button>
            </div>
          ) : sortedInquiries.length === 0 ? (
            <div
              data-ocid="admin.empty_state"
              className="p-12 text-center text-muted-foreground flex flex-col items-center gap-3"
            >
              <Inbox className="w-10 h-10 opacity-30" />
              <p className="text-sm font-medium">No inquiries yet</p>
              <p className="text-xs">
                Submitted inquiries from the Contact page will appear here.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table data-ocid="admin.inquiry.table">
                <TableHeader>
                  <TableRow className="bg-navy-dark">
                    <TableHead className="w-8 text-white" />
                    <TableHead className="text-xs text-white">Name</TableHead>
                    <TableHead className="text-xs text-white">Email</TableHead>
                    <TableHead className="text-xs text-white">Phone</TableHead>
                    <TableHead className="text-xs text-white">
                      Program
                    </TableHead>
                    <TableHead className="text-xs text-white">
                      Message
                    </TableHead>
                    <TableHead className="text-xs text-white">Date</TableHead>
                    <TableHead className="text-xs text-white w-20">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedInquiries.map((inquiry, i) => (
                    <InquiryRow
                      key={inquiry.id.toString()}
                      inquiry={inquiry}
                      index={i + 1}
                      onToggleRead={(id, isRead) =>
                        toggleReadMutation.mutate({ id, isRead })
                      }
                      onDelete={(id) => deleteMutation.mutate(id)}
                      isTogglePending={
                        toggleReadMutation.isPending &&
                        toggleReadMutation.variables?.id === inquiry.id
                      }
                      isDeletePending={
                        deleteMutation.isPending &&
                        deleteMutation.variables === inquiry.id
                      }
                    />
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>

        {/* Assign Admin Role */}
        <div className="bg-card rounded-xl border border-border shadow-xs p-5">
          <h2 className="font-bold text-foreground flex items-center gap-2 mb-4">
            <UserCog className="w-4 h-4 text-gold" />
            Assign Admin Role
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Grant admin access to another user by entering their Internet
            Identity Principal ID.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
            <div className="flex-1">
              <Input
                data-ocid="admin.assign_role.input"
                placeholder="Principal ID (e.g. aaaaa-aa)"
                value={assignPrincipal}
                onChange={(e) => {
                  setAssignPrincipal(e.target.value);
                  if (assignError) setAssignError("");
                }}
                className={assignError ? "border-destructive" : ""}
              />
              {assignError && (
                <p
                  data-ocid="admin.error_state"
                  className="text-destructive text-xs mt-1"
                >
                  {assignError}
                </p>
              )}
            </div>
            <Button
              data-ocid="admin.assign_role.submit_button"
              onClick={handleAssign}
              disabled={assignRoleMutation.isPending || !assignPrincipal.trim()}
              className="bg-navy hover:bg-navy-dark text-white font-semibold whitespace-nowrap"
            >
              {assignRoleMutation.isPending ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : (
                <Shield className="w-4 h-4 mr-2" />
              )}
              Assign Admin
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── Admin Page (root) ───────────────────────────────────────────────────────

export default function Admin() {
  const { identity, isInitializing, clear } = useInternetIdentity();
  const { actor, isFetching: actorFetching } = useActor();

  // Check admin status
  const { data: isAdmin, isLoading: adminCheckLoading } = useQuery<boolean>({
    queryKey: ["admin-check", identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !actorFetching && !!identity,
  });

  // Not logged in
  if (!identity) {
    return <LoginGate />;
  }

  // Loading auth check
  if (isInitializing || actorFetching || adminCheckLoading) {
    return (
      <div
        data-ocid="admin.loading_state"
        className="min-h-screen bg-background flex items-center justify-center"
      >
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-foreground" />
          <p className="text-sm text-muted-foreground">Verifying access…</p>
        </div>
      </div>
    );
  }

  // Not admin
  if (isAdmin === false) {
    return <AccessDenied onLogout={clear} />;
  }

  return <AdminDashboard />;
}
