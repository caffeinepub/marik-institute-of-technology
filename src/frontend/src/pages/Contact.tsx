import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import {
  CheckCircle,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const programs = [
  "B.Tech Computer Science Engineering",
  "B.Tech Mechanical Engineering",
  "B.Tech Civil Engineering",
  "B.Tech Electrical Engineering",
  "M.Tech Programs",
  "Specialized Technical Courses",
  "General Inquiry",
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  program: string;
  message: string;
}

export default function Contact() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Valid email is required";
    if (!form.phone.trim() || !/^\+?[\d\s-]{10,}$/.test(form.phone))
      newErrors.phone = "Valid phone number is required";
    if (!form.program) newErrors.program = "Please select a program";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (!actor) {
      toast.error("Service not ready. Please try again in a moment.");
      return;
    }
    setSubmitting(true);
    try {
      await actor.submitInquiry(
        form.fullName,
        form.email,
        form.phone,
        form.program,
        form.message,
      );
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to submit inquiry:", err);
      toast.error("Failed to submit inquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-navy py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
            Get in Touch
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-4" />
          <p className="text-white/90 max-w-2xl mx-auto text-sm md:text-base">
            Have questions about admissions, programs, or campus life?
            We&apos;re here to help. Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-navy-light/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      Campus Address
                    </div>
                    <div className="text-muted-foreground text-sm mt-0.5 leading-relaxed">
                      Marik Institute of Technology
                      <br />
                      Jaipur, Rajasthan 302001
                      <br />
                      India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-navy-light/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      Phone Numbers
                    </div>
                    <div className="text-muted-foreground text-sm mt-0.5">
                      <div>+91-141-000-0000 (Main)</div>
                      <div>+91-141-000-0001 (Admissions)</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-navy-light/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      Email Addresses
                    </div>
                    <div className="text-muted-foreground text-sm mt-0.5">
                      <div>admissions@marikit.edu.in</div>
                      <div>info@marikit.edu.in</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-navy-light/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      Office Hours
                    </div>
                    <div className="text-muted-foreground text-sm mt-0.5">
                      <div>Mon – Sat: 9:00 AM – 5:00 PM</div>
                      <div>Sunday: Closed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Admission Helpline */}
              <div className="mt-8 bg-navy rounded-xl p-5">
                <h3 className="font-bold text-white text-sm mb-3">
                  Admission Helpline
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>+91-141-000-0001</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>admissions@marikit.edu.in</span>
                  </div>
                </div>
                <p className="text-white/80 text-xs mt-3">
                  Our admissions team is available Monday to Saturday, 9 AM – 5
                  PM to answer all your queries.
                </p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-foreground mb-6">
                Send Us an Inquiry
              </h2>

              {submitted ? (
                <div
                  data-ocid="contact.success_state"
                  className="bg-card border border-gold/40 rounded-xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Inquiry Submitted Successfully!
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Thank you,{" "}
                    <strong className="text-foreground">{form.fullName}</strong>
                    ! We have received your inquiry and our team will get back
                    to you within 1–2 business days.
                  </p>
                  <p className="text-muted-foreground text-xs">
                    A confirmation will be sent to{" "}
                    <strong className="text-foreground">{form.email}</strong>
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        fullName: "",
                        email: "",
                        phone: "",
                        program: "",
                        message: "",
                      });
                    }}
                    className="mt-6 text-sm text-gold underline hover:text-foreground transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="fullName"
                        className="text-sm font-medium text-foreground"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                        value={form.fullName}
                        onChange={(e) =>
                          handleChange("fullName", e.target.value)
                        }
                        className={errors.fullName ? "border-destructive" : ""}
                      />
                      {errors.fullName && (
                        <p className="text-destructive text-xs">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email Address{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-destructive text-xs">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground"
                      >
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-destructive text-xs">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Program of Interest */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="program"
                        className="text-sm font-medium text-foreground"
                      >
                        Program of Interest{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={form.program}
                        onValueChange={(val) => handleChange("program", val)}
                      >
                        <SelectTrigger
                          id="program"
                          className={errors.program ? "border-destructive" : ""}
                        >
                          <SelectValue placeholder="Select a program" />
                        </SelectTrigger>
                        <SelectContent>
                          {programs.map((prog) => (
                            <SelectItem key={prog} value={prog}>
                              {prog}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.program && (
                        <p className="text-destructive text-xs">
                          {errors.program}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Write your message or inquiry here..."
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-destructive text-xs">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    data-ocid="contact.submit_button"
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto bg-navy hover:bg-navy-dark text-white font-semibold px-8 py-3 rounded inline-flex items-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2
                          data-ocid="contact.loading_state"
                          className="w-4 h-4 animate-spin"
                        />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Inquiry
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Map */}
      <section className="py-16 md:py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Find Us
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Campus Location
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground text-sm">
              Marik Institute of Technology, Jaipur, Rajasthan, India
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-border shadow-card">
            <iframe
              title="Marik Institute of Technology Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65047083359375!3d26.88514083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 shadow-card">
              <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <div className="text-xs font-semibold text-foreground">
                  Address
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  Jaipur, Rajasthan 302001, India
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 shadow-card">
              <Phone className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <div className="text-xs font-semibold text-foreground">
                  Helpline
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  +91-141-000-0000
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 shadow-card">
              <Mail className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <div className="text-xs font-semibold text-foreground">
                  Email
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  admissions@marikit.edu.in
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
