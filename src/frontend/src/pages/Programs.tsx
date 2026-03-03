import {
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Cpu,
  GraduationCap,
  Lightbulb,
  Microscope,
  Zap,
} from "lucide-react";
import { useState } from "react";
import type { ElementType } from "react";

interface Program {
  id: string;
  title: string;
  level: string;
  duration: string;
  icon: ElementType;
  overview: string;
  eligibility: string[];
  careers: string[];
  highlights: string[];
}

const programs: Program[] = [
  {
    id: "btech-cse",
    title: "B.Tech in Computer Science Engineering",
    level: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    icon: Cpu,
    overview:
      "The B.Tech in Computer Science Engineering program provides a comprehensive foundation in computing, software development, algorithms, data structures, artificial intelligence, and emerging technologies. Students gain both theoretical knowledge and practical skills through extensive lab work, projects, and industry internships.",
    eligibility: [
      "10+2 with Physics, Chemistry, and Mathematics (PCM)",
      "Minimum 50% aggregate marks in PCM",
      "Valid JEE Main score or state-level entrance exam",
      "Age: 17–25 years at the time of admission",
    ],
    careers: [
      "Software Engineer",
      "Data Scientist",
      "AI/ML Engineer",
      "Cybersecurity Analyst",
      "Cloud Architect",
      "Full Stack Developer",
      "Product Manager",
      "Research Scientist",
    ],
    highlights: [
      "AI & Machine Learning specialization",
      "Cloud Computing lab",
      "Industry-sponsored projects",
      "Coding bootcamps & hackathons",
    ],
  },
  {
    id: "btech-mech",
    title: "B.Tech in Mechanical Engineering",
    level: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    icon: Building2,
    overview:
      "The B.Tech in Mechanical Engineering program covers thermodynamics, fluid mechanics, manufacturing processes, machine design, robotics, and CAD/CAM. Students develop strong analytical and design skills through hands-on laboratory sessions and industry projects.",
    eligibility: [
      "10+2 with Physics, Chemistry, and Mathematics (PCM)",
      "Minimum 50% aggregate marks in PCM",
      "Valid JEE Main score or state-level entrance exam",
      "Age: 17–25 years at the time of admission",
    ],
    careers: [
      "Mechanical Design Engineer",
      "Manufacturing Engineer",
      "Automotive Engineer",
      "Robotics Engineer",
      "HVAC Engineer",
      "Quality Control Engineer",
      "R&D Engineer",
    ],
    highlights: [
      "Advanced CAD/CAM lab",
      "Robotics & automation workshop",
      "Industry tie-ups with manufacturing firms",
      "Thermal & fluid dynamics lab",
    ],
  },
  {
    id: "btech-civil",
    title: "B.Tech in Civil Engineering",
    level: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    icon: Building2,
    overview:
      "The B.Tech in Civil Engineering program covers structural engineering, geotechnical engineering, transportation, environmental engineering, and construction management. Students learn to design and build sustainable infrastructure through practical training and site visits.",
    eligibility: [
      "10+2 with Physics, Chemistry, and Mathematics (PCM)",
      "Minimum 50% aggregate marks in PCM",
      "Valid JEE Main score or state-level entrance exam",
      "Age: 17–25 years at the time of admission",
    ],
    careers: [
      "Structural Engineer",
      "Site Engineer",
      "Urban Planner",
      "Environmental Engineer",
      "Construction Manager",
      "Transportation Engineer",
      "Geotechnical Engineer",
    ],
    highlights: [
      "Structural analysis lab",
      "AutoCAD & BIM software training",
      "Site visits and industrial tours",
      "Sustainable construction focus",
    ],
  },
  {
    id: "btech-ee",
    title: "B.Tech in Electrical Engineering",
    level: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    icon: Lightbulb,
    overview:
      "The B.Tech in Electrical Engineering program covers power systems, control systems, electronics, signal processing, and renewable energy. Students gain expertise in designing and managing electrical systems through comprehensive lab training and industry projects.",
    eligibility: [
      "10+2 with Physics, Chemistry, and Mathematics (PCM)",
      "Minimum 50% aggregate marks in PCM",
      "Valid JEE Main score or state-level entrance exam",
      "Age: 17–25 years at the time of admission",
    ],
    careers: [
      "Electrical Design Engineer",
      "Power Systems Engineer",
      "Control Systems Engineer",
      "Renewable Energy Specialist",
      "Instrumentation Engineer",
      "Electrical Project Manager",
    ],
    highlights: [
      "Power systems simulation lab",
      "Renewable energy projects",
      "PLC & SCADA training",
      "Smart grid technology focus",
    ],
  },
  {
    id: "mtech",
    title: "M.Tech Programs",
    level: "Postgraduate",
    duration: "2 Years (4 Semesters)",
    icon: Microscope,
    overview:
      "The M.Tech programs offer advanced specialization in various engineering disciplines including Computer Science, Mechanical, Civil, and Electrical Engineering. The program emphasizes research, advanced coursework, and a significant thesis component that contributes to the field of knowledge.",
    eligibility: [
      "B.Tech/B.E. in relevant engineering discipline",
      "Minimum 55% aggregate marks in undergraduate degree",
      "Valid GATE score (preferred) or institute entrance test",
      "Age: No upper age limit",
    ],
    careers: [
      "Senior Research Engineer",
      "Academic Faculty",
      "R&D Specialist",
      "Technical Consultant",
      "Project Lead",
      "Innovation Manager",
      "PhD Research Scholar",
    ],
    highlights: [
      "Research-focused curriculum",
      "Thesis on cutting-edge topics",
      "Access to advanced research labs",
      "Publication opportunities in journals",
    ],
  },
  {
    id: "specialized",
    title: "Specialized Technical Courses",
    level: "Postgraduate",
    duration: "6 Months – 1 Year",
    icon: BookOpen,
    overview:
      "Specialized technical courses are short-term, industry-focused programs designed to upskill professionals and fresh graduates in emerging technologies. These include courses in Data Science, IoT, Cybersecurity, Renewable Energy, and Advanced Manufacturing.",
    eligibility: [
      "B.Tech/B.E. or equivalent technical degree",
      "Working professionals with relevant experience",
      "Minimum 50% in qualifying examination",
      "Basic programming or technical background preferred",
    ],
    careers: [
      "Technology Specialist",
      "Industry Consultant",
      "Technical Trainer",
      "Domain Expert",
      "Startup Founder",
      "Innovation Lead",
    ],
    highlights: [
      "Industry-certified programs",
      "Flexible weekend/evening batches",
      "Hands-on project-based learning",
      "Direct industry mentorship",
    ],
  },
];

function ProgramCard({ program }: { program: Program }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = program.icon;

  return (
    <div className="bg-card rounded-lg border border-border hover:border-gold/30 shadow-card overflow-hidden transition-all duration-200">
      <button
        type="button"
        className="w-full text-left p-6 flex items-start gap-4 hover:bg-navy-light/10 transition-colors duration-150"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <div className="w-12 h-12 bg-navy-light/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-gold" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                program.level === "Undergraduate"
                  ? "bg-navy-light/20 text-foreground"
                  : "bg-gold/20 text-gold"
              }`}
            >
              {program.level}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" /> {program.duration}
            </span>
          </div>
          <h3 className="font-bold text-foreground text-base md:text-lg leading-snug">
            {program.title}
          </h3>
        </div>
        <div className="flex-shrink-0 mt-1">
          {expanded ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="border-t border-border px-6 pb-6 pt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Course Overview */}
            <div className="md:col-span-2">
              <h4 className="font-bold text-foreground text-sm mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-gold" /> Course Overview
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {program.overview}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="font-bold text-foreground text-sm mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-gold" /> Program Highlights
              </h4>
              <ul className="space-y-2">
                {program.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility */}
            <div>
              <h4 className="font-bold text-foreground text-sm mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-gold" /> Eligibility
                Criteria
              </h4>
              <ul className="space-y-2">
                {program.eligibility.map((e) => (
                  <li
                    key={e}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Opportunities */}
            <div className="md:col-span-2">
              <h4 className="font-bold text-foreground text-sm mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-gold" /> Career Opportunities
              </h4>
              <div className="flex flex-wrap gap-2">
                {program.careers.map((career) => (
                  <span
                    key={career}
                    className="bg-navy-light/15 border border-border text-foreground text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {career}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Programs() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="relative overflow-hidden">
        <img
          src="/assets/generated/programs-banner.dim_1200x400.png"
          alt="Programs Banner"
          className="w-full h-48 md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-navy/75 flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Academic Excellence
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              Our Programs
            </h1>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto" />
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16 md:py-20 bg-section-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Explore our comprehensive range of engineering programs. Click on
              any program to view detailed information about course overview,
              eligibility, and career opportunities.
            </p>
          </div>

          {/* Undergraduate */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-navy-light/30 border border-border rounded flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-foreground" />
              </div>
              <h2 className="text-xl font-bold text-foreground">
                Undergraduate Programs
              </h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="space-y-4">
              {programs
                .filter((p) => p.level === "Undergraduate")
                .map((p) => (
                  <ProgramCard key={p.id} program={p} />
                ))}
            </div>
          </div>

          {/* Postgraduate */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-gold/20 rounded flex items-center justify-center">
                <Microscope className="w-4 h-4 text-gold" />
              </div>
              <h2 className="text-xl font-bold text-foreground">
                Postgraduate Programs
              </h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="space-y-4">
              {programs
                .filter((p) => p.level === "Postgraduate")
                .map((p) => (
                  <ProgramCard key={p.id} program={p} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
