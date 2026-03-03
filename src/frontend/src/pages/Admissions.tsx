import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "@tanstack/react-router";
import {
  AlertCircle,
  CheckCircle,
  ChevronRight,
  FileText,
  Mail,
  Phone,
} from "lucide-react";

const admissionSteps = [
  {
    step: 1,
    title: "Check Eligibility",
    desc: "Review the eligibility criteria for your desired program and ensure you meet all requirements.",
  },
  {
    step: 2,
    title: "Fill Application Form",
    desc: "Complete the online application form with accurate personal, academic, and contact details.",
  },
  {
    step: 3,
    title: "Upload Documents",
    desc: "Upload all required documents in the specified format (PDF/JPG, max 2MB each).",
  },
  {
    step: 4,
    title: "Pay Application Fee",
    desc: "Pay the non-refundable application processing fee through the secure online payment portal.",
  },
  {
    step: 5,
    title: "Entrance Test / Merit",
    desc: "Appear for the institute entrance test or submit valid JEE/GATE scores as applicable.",
  },
  {
    step: 6,
    title: "Counseling & Seat Allotment",
    desc: "Attend the counseling session and receive your seat allotment based on merit and preference.",
  },
  {
    step: 7,
    title: "Fee Payment & Enrollment",
    desc: "Pay the semester fee and complete the enrollment formalities to confirm your admission.",
  },
];

const documents = [
  "10th Standard Mark Sheet & Certificate",
  "12th Standard Mark Sheet & Certificate",
  "JEE Main / GATE Score Card (as applicable)",
  "Transfer Certificate from last institution",
  "Character Certificate from last institution",
  "Migration Certificate (if applicable)",
  "Category Certificate (SC/ST/OBC, if applicable)",
  "Domicile Certificate",
  "Passport-size photographs (6 copies)",
  "Aadhar Card / Government ID Proof",
  "Medical Fitness Certificate",
  "Income Certificate (for scholarship applicants)",
];

const eligibilityData = [
  {
    program: "B.Tech (All Branches)",
    qualification: "10+2 with PCM",
    minMarks: "50% in PCM",
    entrance: "JEE Main / State CET",
  },
  {
    program: "M.Tech Programs",
    qualification: "B.Tech/B.E. in relevant field",
    minMarks: "55% aggregate",
    entrance: "GATE / Institute Test",
  },
  {
    program: "Specialized Courses",
    qualification: "B.Tech/B.E. or equivalent",
    minMarks: "50% aggregate",
    entrance: "Direct Admission",
  },
];

const feeData = [
  {
    program: "B.Tech (All Branches)",
    tuition: "Contact Admissions Office",
    hostel: "Contact Admissions Office",
    total: "Contact Admissions Office",
  },
  {
    program: "M.Tech Programs",
    tuition: "Contact Admissions Office",
    hostel: "Contact Admissions Office",
    total: "Contact Admissions Office",
  },
  {
    program: "Specialized Courses",
    tuition: "Contact Admissions Office",
    hostel: "N/A",
    total: "Contact Admissions Office",
  },
];

export default function Admissions() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-navy py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
            Join Us
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Admissions
          </h1>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-4" />
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
            Begin your journey towards engineering excellence. Find all the
            information you need to apply to Marik Institute of Technology.
          </p>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Step 1
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
              Eligibility Requirements
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mb-6" />
            <p className="text-muted-foreground text-sm mb-6">
              Review the eligibility criteria for each program before applying.
              Meeting the minimum requirements is mandatory for consideration.
            </p>
          </div>
          <div className="overflow-x-auto rounded-lg border border-border shadow-card">
            <Table>
              <TableHeader>
                <TableRow className="bg-navy hover:bg-navy">
                  <TableHead className="text-white font-semibold">
                    Program
                  </TableHead>
                  <TableHead className="text-white font-semibold">
                    Qualifying Exam
                  </TableHead>
                  <TableHead className="text-white font-semibold">
                    Minimum Marks
                  </TableHead>
                  <TableHead className="text-white font-semibold">
                    Entrance Exam
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {eligibilityData.map((row) => (
                  <TableRow key={row.program} className="hover:bg-secondary/30">
                    <TableCell className="font-semibold text-navy text-sm">
                      {row.program}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {row.qualification}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {row.minMarks}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {row.entrance}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Step by Step
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
              Admission Process
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full" />
          </div>
          <div className="space-y-4">
            {admissionSteps.map((step) => (
              <div
                key={step.step}
                className="flex gap-4 bg-white rounded-lg p-5 border border-border shadow-card"
              >
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-navy text-sm mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Documentation
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
              Required Documents
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mb-4" />
            <div className="flex items-start gap-2 bg-gold/10 border border-gold/30 rounded-lg p-4">
              <AlertCircle className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">
                Please ensure all documents are self-attested and in the
                required format. Incomplete applications will not be processed.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {documents.map((doc) => (
              <div
                key={doc}
                className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-gold/40 hover:bg-secondary/30 transition-colors"
              >
                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Financial Information
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
              Fee Structure
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mb-4" />
            <p className="text-muted-foreground text-sm">
              Fee details are subject to revision. Please contact the Admissions
              Office for the most current fee structure.
            </p>
          </div>
          <div className="overflow-x-auto rounded-lg border border-border shadow-card">
            <Table>
              <TableHeader>
                <TableRow className="bg-navy hover:bg-navy">
                  <TableHead className="text-white font-semibold">
                    Program
                  </TableHead>
                  <TableHead className="text-white font-semibold">
                    Tuition Fee (Per Year)
                  </TableHead>
                  <TableHead className="text-white font-semibold">
                    Hostel Fee (Per Year)
                  </TableHead>
                  <TableHead className="text-white font-semibold">
                    Total (Approx.)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feeData.map((row) => (
                  <TableRow key={row.program} className="hover:bg-secondary/30">
                    <TableCell className="font-semibold text-navy text-sm">
                      {row.program}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {row.tuition}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {row.hostel}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {row.total}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 flex items-start gap-2 bg-navy/5 border border-navy/20 rounded-lg p-4">
            <FileText className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              Scholarships and financial aid are available for meritorious and
              economically disadvantaged students. Contact the Admissions Office
              for details.
            </p>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-white/70 mb-8 text-sm md:text-base">
            Take the first step towards a rewarding engineering career. Our
            admissions team is here to guide you through every step of the
            process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gold text-navy-dark px-8 py-3.5 rounded font-bold text-sm hover:bg-gold-dark transition-colors inline-flex items-center justify-center gap-2"
            >
              Start Your Application <ChevronRight className="w-4 h-4" />
            </Link>
            <div className="flex items-center justify-center gap-4 text-white/70 text-sm">
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-gold" /> +91-141-000-0000
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-gold" /> admissions@marikit.edu.in
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
