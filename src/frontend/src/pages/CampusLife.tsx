import {
  BookOpen,
  Code,
  FlaskConical,
  Home as HomeIcon,
  Library,
  Monitor,
  Music,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";

const infrastructure = [
  {
    title: "Advanced Engineering Labs",
    desc: "State-of-the-art laboratories equipped with the latest instruments and technology for hands-on learning across all engineering disciplines.",
    image: "/assets/generated/lab-interior.dim_800x500.png",
    icon: FlaskConical,
  },
  {
    title: "Smart Classrooms",
    desc: "Technology-enabled classrooms with interactive projectors, digital boards, and high-speed internet for an immersive learning experience.",
    image: "/assets/generated/classroom.dim_800x500.png",
    icon: Monitor,
  },
  {
    title: "Central Library",
    desc: "A comprehensive library with over 50,000 books, journals, research papers, and digital resources accessible 24/7 to students.",
    image: "/assets/generated/library.dim_800x500.png",
    icon: Library,
  },
  {
    title: "Sports Complex",
    desc: "Multi-sport facilities including cricket ground, football field, basketball courts, badminton courts, and a fully equipped gymnasium.",
    image: "/assets/generated/sports.dim_800x500.png",
    icon: Trophy,
  },
];

const activities = [
  {
    icon: Code,
    title: "Technical Clubs",
    desc: "Coding Club, Robotics Club, Electronics Club, Civil Design Club — student-led technical communities.",
  },
  {
    icon: Music,
    title: "Cultural Societies",
    desc: "Music, Dance, Drama, Fine Arts, and Literary societies for creative expression and cultural enrichment.",
  },
  {
    icon: Users,
    title: "Student Council",
    desc: "An elected student body that represents student interests and organizes campus events and initiatives.",
  },
  {
    icon: BookOpen,
    title: "Academic Societies",
    desc: "Department-specific academic societies that organize seminars, guest lectures, and knowledge-sharing sessions.",
  },
  {
    icon: Trophy,
    title: "Sports Teams",
    desc: "Competitive sports teams representing the institute in inter-college and state-level tournaments.",
  },
  {
    icon: HomeIcon,
    title: "NSS & NCC",
    desc: "National Service Scheme and National Cadet Corps units for community service and discipline.",
  },
];

const techFests = [
  {
    name: "TechNova",
    type: "Annual Technical Festival",
    desc: "The flagship annual technical festival featuring hackathons, robotics competitions, paper presentations, project exhibitions, and industry talks. Attracts participants from over 50 colleges across Rajasthan.",
    highlights: [
      "Hackathon (24-hour coding challenge)",
      "Robotics & Automation Competition",
      "Technical Paper Presentation",
      "Project Exhibition & Innovation Showcase",
      "Industry Expert Talks & Workshops",
    ],
  },
  {
    name: "CodeSprint",
    type: "Bi-Annual Coding Contest",
    desc: "A competitive programming event held twice a year, challenging students with algorithmic problems, data structures, and real-world coding scenarios.",
    highlights: [
      "Competitive programming rounds",
      "Algorithm design challenges",
      "Team-based problem solving",
      "Cash prizes and certificates",
    ],
  },
];

const workshops = [
  {
    title: "Industry Expert Workshops",
    desc: "Regular workshops conducted by industry professionals covering emerging technologies, industry trends, and practical skills.",
  },
  {
    title: "Research Methodology Seminars",
    desc: "Seminars on research methods, academic writing, and publication processes for students interested in research careers.",
  },
  {
    title: "Entrepreneurship Bootcamps",
    desc: "Intensive bootcamps on startup ideation, business planning, and entrepreneurship for aspiring student entrepreneurs.",
  },
  {
    title: "Certification Programs",
    desc: "Short-term certification courses in collaboration with industry partners on topics like cloud computing, data science, and cybersecurity.",
  },
  {
    title: "Alumni Interaction Sessions",
    desc: "Regular sessions where successful alumni share their experiences, career journeys, and industry insights with current students.",
  },
  {
    title: "International Webinars",
    desc: "Online seminars featuring international academics and industry leaders on global engineering trends and innovations.",
  },
];

export default function CampusLife() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-navy py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
            Life at MIT
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Campus Life
          </h1>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-4" />
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
            Experience a vibrant campus life that nurtures academic excellence,
            personal growth, and lifelong friendships.
          </p>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              World-Class Facilities
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              Infrastructure
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Our campus is equipped with modern infrastructure designed to
              support every aspect of student life and learning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {infrastructure.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-lg border border-border shadow-card overflow-hidden hover:shadow-card-hover transition-shadow duration-200"
                >
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-navy/30" />
                    <div className="absolute bottom-3 left-3 bg-gold text-navy-dark p-2 rounded-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-navy text-base mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional facilities */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: HomeIcon, label: "Boys Hostel" },
              { icon: HomeIcon, label: "Girls Hostel" },
              { icon: Wrench, label: "Workshop" },
              { icon: Users, label: "Seminar Hall" },
              { icon: BookOpen, label: "Reading Room" },
              { icon: Trophy, label: "Gymnasium" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-secondary/50 border border-border rounded-lg p-4 text-center"
                >
                  <Icon className="w-6 h-6 text-navy mx-auto mb-2" />
                  <span className="text-xs font-semibold text-navy">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student Activities */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Beyond Academics
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              Student Activities
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              We believe in holistic development. Our campus buzzes with diverse
              activities that help students discover their passions and build
              lifelong skills.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.title}
                  className="bg-white rounded-lg p-5 border border-border shadow-card hover:border-gold/40 hover:shadow-card-hover transition-all duration-200"
                >
                  <div className="w-11 h-11 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-navy" />
                  </div>
                  <h3 className="font-bold text-navy text-sm mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {activity.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Fests */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Annual Events
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Technical Fests
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-4" />
            <p className="text-white/70 max-w-xl mx-auto text-sm">
              Our technical festivals are platforms for innovation, competition,
              and collaboration that bring together the brightest minds.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techFests.map((fest) => (
              <div
                key={fest.name}
                className="bg-white/10 border border-white/20 rounded-xl p-6 md:p-8"
              >
                <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {fest.type}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {fest.name}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  {fest.desc}
                </p>
                <div className="space-y-2">
                  {fest.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops & Seminars */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Continuous Learning
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              Workshops & Seminars
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Regular workshops and seminars keep our students updated with the
              latest industry trends and academic developments.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {workshops.map((ws) => (
              <div
                key={ws.title}
                className="border-l-4 border-gold bg-secondary/40 rounded-r-lg p-5 hover:bg-secondary/60 transition-colors duration-200"
              >
                <h3 className="font-bold text-navy text-sm mb-2">{ws.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {ws.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
