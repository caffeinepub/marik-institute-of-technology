# Marik Institute of Technology

## Current State
- Full institute website with pages: Home, About, Programs, Admissions, Campus Life, Placements, Contact.
- Contact page has an inquiry form but it only updates local React state — no data is persisted to the backend.
- Backend (`main.mo`) is empty (`actor {}`). No backend APIs exist yet.
- No admin panel or authentication.

## Requested Changes (Diff)

### Add
- **Inquiry storage backend**: Motoko backend stores every contact form submission with fields: fullName, email, phone, program, message, timestamp.
- **Admin login**: Internet Identity login protected `/admin` route.
- **Admin dashboard page** (`/admin`):
  - Shows total inquiry count.
  - Lists all inquiries in a table with columns: Name, Email, Phone, Program, Message, Date.
  - Delete individual inquiry.
  - Mark inquiry as read/unread.
  - Export all inquiries as CSV download.
- **Contact form wired to backend**: On submit, calls a backend `submitInquiry` update function to persist data.

### Modify
- `App.tsx`: Add `/admin` route (no Navbar/Footer — standalone layout).
- `Contact.tsx`: Wire form submission to backend `submitInquiry` call instead of local state only.

### Remove
- Nothing removed.

## Implementation Plan
1. Generate Motoko backend with:
   - `submitInquiry(fullName, email, phone, program, message)` — public update, stores inquiry with auto-incremented ID and timestamp.
   - `getInquiries()` — admin-only query returning all inquiries.
   - `deleteInquiry(id)` — admin-only update to remove an inquiry.
   - `markRead(id, isRead)` — admin-only update to toggle read status.
   - Admin check via caller principal (first caller who calls `setAdmin` becomes admin, or use authorization component).
2. Select `authorization` Caffeine component for Internet Identity login.
3. Build frontend:
   - Wire Contact form `handleSubmit` to call `backend.submitInquiry(...)`.
   - Create `AdminPage.tsx` with Internet Identity login gate, inquiry table, delete, mark read/unread, CSV export.
   - Add `/admin` route in `App.tsx` with a layout that skips Navbar/Footer.
