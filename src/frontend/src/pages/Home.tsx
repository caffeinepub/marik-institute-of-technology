import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  Briefcase,
  Building2,
  ChevronRight,
  Cpu,
  FlaskConical,
  Home as HomeIcon,
  Library,
  Lightbulb,
  Mail,
  MapPin,
  Microscope,
  Monitor,
  Phone,
  Quote,
  Trophy,
  Users,
} from "lucide-react";

const programs = [
  {
    title: "B.Tech Computer Science Engineering",
    level: "Undergraduate",
    duration: "4 Years",
    icon: Cpu,
  },
  {
    title: "B.Tech Mechanical Engineering",
    level: "Undergraduate",
    duration: "4 Years",
    icon: Building2,
  },
  {
    title: "B.Tech Civil Engineering",
    level: "Undergraduate",
    duration: "4 Years",
    icon: Building2,
  },
  {
    title: "B.Tech Electrical Engineering",
    level: "Undergraduate",
    duration: "4 Years",
    icon: Lightbulb,
  },
  {
    title: "M.Tech Programs",
    level: "Postgraduate",
    duration: "2 Years",
    icon: Microscope,
  },
  {
    title: "Specialized Technical Courses",
    level: "Postgraduate",
    duration: "Varies",
    icon: BookOpen,
  },
];

const whyChoose = [
  {
    icon: FlaskConical,
    title: "Modern Laboratories",
    desc: "State-of-the-art labs equipped with the latest technology for hands-on learning.",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    desc: "Highly qualified professors with industry and research expertise.",
  },
  {
    icon: Briefcase,
    title: "Industry-Oriented Curriculum",
    desc: "Curriculum designed in collaboration with industry leaders for real-world readiness.",
  },
  {
    icon: Trophy,
    title: "Placement Support",
    desc: "Dedicated placement cell with strong industry connections and career guidance.",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    desc: "Active research centers fostering innovation and entrepreneurship.",
  },
  {
    icon: HomeIcon,
    title: "Campus Facilities & Hostel",
    desc: "Modern campus with comfortable hostel, sports, and recreational facilities.",
  },
];

const facilities = [
  {
    icon: FlaskConical,
    title: "Advanced Labs",
    desc: "Cutting-edge engineering and computer labs",
  },
  {
    icon: Monitor,
    title: "Smart Classrooms",
    desc: "Technology-enabled interactive learning spaces",
  },
  {
    icon: Library,
    title: "Library",
    desc: "Extensive collection of books, journals & digital resources",
  },
  {
    icon: Trophy,
    title: "Sports Facilities",
    desc: "Multi-sport grounds and indoor sports complex",
  },
  {
    icon: HomeIcon,
    title: "Hostel Accommodation",
    desc: "Separate hostels for boys and girls with all amenities",
  },
  {
    icon: Microscope,
    title: "Research Centers",
    desc: "Dedicated centers for advanced research and innovation",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    batch: "B.Tech CSE, Batch 2023",
    quote:
      "Marik Institute gave me the perfect foundation for my career in software engineering. The faculty is incredibly supportive and the labs are world-class.",
  },
  {
    name: "Rahul Verma",
    batch: "B.Tech Mechanical, Batch 2022",
    quote:
      "The industry-oriented curriculum and placement support helped me land my dream job at a top manufacturing company. I am grateful for the opportunities here.",
  },
  {
    name: "Anjali Singh",
    batch: "M.Tech, Batch 2024",
    quote:
      "The research environment at Marik Institute is exceptional. I had access to excellent resources and mentorship that shaped my academic journey.",
  },
];

const stats = [
  { value: "90%+", label: "Placement Rate" },
  { value: "150+", label: "Top Recruiters" },
  { value: "500+", label: "Internship Opportunities" },
  { value: "25+", label: "Industry Partners" },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[560px] md:min-h-[640px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/marik-institute-hero.dim_1200x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              Under NIMS University, Jaipur
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Empowering Future
              <br />
              <span className="text-gold">Engineers & Innovators</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed">
              A Premier Institute of Engineering & Technology under NIMS
              University — shaping tomorrow's leaders through academic
              excellence, research, and innovation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/admissions"
                className="bg-gold text-navy-dark px-6 py-3 rounded font-semibold text-sm hover:bg-gold-dark transition-colors duration-150 inline-flex items-center gap-2"
              >
                Apply Now <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                to="/programs"
                className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded font-semibold text-sm hover:bg-white/20 transition-colors duration-150 inline-flex items-center gap-2"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-white/20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center py-2">
                <div className="text-2xl md:text-3xl font-bold text-gold">
                  {stat.value}
                </div>
                <div className="text-white/70 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Marik Institute of Technology
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Marik Institute of Technology is a premier engineering and
                technology institution affiliated with NIMS University, located
                in the vibrant city of Jaipur, Rajasthan. We are committed to
                providing world-class technical education that prepares students
                for the challenges of a rapidly evolving technological
                landscape.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our institution focuses on engineering and technical education
                with a strong emphasis on academic excellence, cutting-edge
                research, and innovation. We nurture talent through a holistic
                approach that combines rigorous academics with practical
                exposure and industry collaboration.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Affiliated with", value: "NIMS University" },
                  { label: "Location", value: "Jaipur, Rajasthan" },
                  { label: "Focus", value: "Engineering & Technology" },
                  { label: "Established", value: "Jaipur, India" },
                ].map((item) => (
                  <div key={item.label} className="bg-secondary/50 rounded p-3">
                    <div className="text-xs text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="text-sm font-semibold text-navy mt-0.5">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-gold transition-colors"
              >
                Learn More About Us <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/marik-institute-hero.dim_1200x600.jpg"
                alt="Marik Institute of Technology Campus"
                className="rounded-lg shadow-card w-full object-cover h-72 md:h-96"
              />
              <div className="absolute -bottom-4 -left-4 bg-gold text-navy-dark p-4 rounded-lg shadow-card hidden md:block">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-xs font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Academic Programs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              Programs Offered
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
              Comprehensive engineering programs designed to build technical
              expertise and professional competence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((prog) => {
              const Icon = prog.icon;
              return (
                <div
                  key={prog.title}
                  className="bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow duration-200 border border-border group"
                >
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-navy transition-colors duration-200">
                    <Icon className="w-6 h-6 text-navy group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      prog.level === "Undergraduate"
                        ? "bg-blue-50 text-blue-700"
                        : "bg-gold/20 text-gold-dark"
                    }`}
                  >
                    {prog.level}
                  </span>
                  <h3 className="font-bold text-navy mt-3 mb-1 text-base leading-snug">
                    {prog.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    Duration: {prog.duration}
                  </p>
                  <Link
                    to="/programs"
                    className="mt-4 inline-flex items-center gap-1 text-navy text-xs font-semibold hover:text-gold transition-colors"
                  >
                    View Details <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded font-semibold text-sm hover:bg-navy-dark transition-colors"
            >
              View All Programs <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Our Strengths
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              Why Choose Marik Institute?
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-lg border border-border hover:border-gold/40 hover:shadow-card transition-all duration-200"
                >
                  <div className="w-11 h-11 bg-gold/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Infrastructure
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Campus Facilities
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-4" />
            <p className="text-white/70 max-w-xl mx-auto text-sm">
              World-class infrastructure designed to support academic excellence
              and holistic development.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {facilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white/10 border border-white/15 rounded-lg p-5 text-center hover:bg-white/15 transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-xs">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/campus-life"
              className="inline-flex items-center gap-2 bg-gold text-navy-dark px-6 py-3 rounded font-semibold text-sm hover:bg-gold-dark transition-colors"
            >
              Explore Campus Life <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Placement Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                Career Success
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Placement & Career Support
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our dedicated Training & Placement Cell works tirelessly to
                connect students with top industry partners. We provide
                comprehensive career support through internships, campus
                recruitment drives, and career counseling.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Strong industry partnerships with leading companies",
                  "Regular internship programs and industrial visits",
                  "Professional career counseling and resume building",
                  "Campus recruitment drives throughout the year",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/placements"
                className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded font-semibold text-sm hover:bg-navy-dark transition-colors"
              >
                View Placement Details <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  value: "90%+",
                  label: "Placement Rate",
                  sub: "Consistent year-on-year",
                },
                {
                  value: "₹6 LPA",
                  label: "Average Package",
                  sub: "Across all programs",
                },
                {
                  value: "₹18 LPA",
                  label: "Highest Package",
                  sub: "Top placement offer",
                },
                {
                  value: "150+",
                  label: "Recruiters",
                  sub: "Visiting campus annually",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-secondary/50 border border-border rounded-lg p-5 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-navy">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Student Voices
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              What Our Students Say
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-lg p-6 shadow-card border border-border"
              >
                <Quote className="w-8 h-8 text-gold/40 mb-3" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                  "{t.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-bold text-navy text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {t.batch}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Join thousands of students who have built successful careers through
            Marik Institute of Technology. Applications are now open for the
            upcoming academic year.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="bg-gold text-navy-dark px-8 py-3 rounded font-semibold text-sm hover:bg-gold-dark transition-colors inline-flex items-center gap-2"
            >
              Apply Now <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 border border-white/30 text-white px-8 py-3 rounded font-semibold text-sm hover:bg-white/20 transition-colors inline-flex items-center gap-2"
            >
              Contact Us
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold" />
              <span>Jaipur, Rajasthan</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold" />
              <span>+91 141 000 0000</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold" />
              <span>admissions@marikinstitute.edu.in</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
