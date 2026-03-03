import {
  Award,
  Briefcase,
  Building,
  Quote,
  TrendingUp,
  Users,
} from "lucide-react";

const stats = [
  {
    value: "90%+",
    label: "Placement Rate",
    sub: "Consistent year-on-year performance",
  },
  { value: "₹6 LPA", label: "Average Package", sub: "Across all programs" },
  {
    value: "₹18 LPA",
    label: "Highest Package",
    sub: "Top placement offer received",
  },
  {
    value: "150+",
    label: "Recruiting Companies",
    sub: "Visiting campus annually",
  },
];

const placementProcess = [
  {
    step: 1,
    title: "Pre-Placement Training",
    desc: "Comprehensive training in aptitude, reasoning, communication, and technical skills throughout the academic year.",
  },
  {
    step: 2,
    title: "Resume Building & Mock Interviews",
    desc: "Professional resume workshops and mock interview sessions with industry experts to prepare students.",
  },
  {
    step: 3,
    title: "Company Registration",
    desc: "Companies register with the T&P Cell and share their requirements, job profiles, and compensation details.",
  },
  {
    step: 4,
    title: "Campus Recruitment Drives",
    desc: "Scheduled recruitment drives on campus with written tests, group discussions, and personal interviews.",
  },
  {
    step: 5,
    title: "Offer Letters & Joining",
    desc: "Selected students receive offer letters and are guided through the joining formalities.",
  },
];

const recruiters = [
  "Tata Consultancy Services",
  "Infosys",
  "Wipro",
  "HCL Technologies",
  "Tech Mahindra",
  "Larsen & Toubro",
  "Reliance Industries",
  "BHEL",
  "NTPC Limited",
  "Siemens India",
  "Bosch India",
  "Mahindra & Mahindra",
];

const alumni = [
  {
    name: "Arjun Mehta",
    batch: "B.Tech CSE, 2021",
    company: "Google India",
    role: "Software Engineer",
    quote:
      "The rigorous training and excellent faculty at Marik Institute prepared me exceptionally well for the competitive tech industry. The placement cell was instrumental in helping me land my dream role.",
  },
  {
    name: "Sneha Patel",
    batch: "B.Tech Mechanical, 2020",
    company: "Larsen & Toubro",
    role: "Project Engineer",
    quote:
      "The practical exposure through labs and industry visits gave me a significant edge during campus placements. I am proud to be a Marik Institute alumna.",
  },
  {
    name: "Vikram Singh",
    batch: "M.Tech, 2022",
    company: "ISRO",
    role: "Research Scientist",
    quote:
      "The research environment and guidance from faculty at Marik Institute helped me pursue my passion for space technology. The institute truly shapes future innovators.",
  },
];

export default function Placements() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-navy py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
            Career Success
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Placements
          </h1>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-4" />
          <p className="text-white/90 max-w-2xl mx-auto text-sm md:text-base">
            Our dedicated Training & Placement Cell ensures every student is
            career-ready and connected with top industry opportunities.
          </p>
        </div>
      </section>

      {/* Placement Stats */}
      <section className="bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-5 md:p-6 text-center shadow-card"
              >
                <div className="text-3xl md:text-4xl font-bold text-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Placement Cell */}
      <section className="py-16 md:py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                Our T&P Cell
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Training & Placement Cell
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full mb-6" />
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                The Training & Placement Cell (T&P Cell) at Marik Institute of
                Technology is the bridge between our students and the industry.
                Our dedicated team of placement officers works year-round to
                build and maintain strong relationships with leading companies
                across sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                We provide comprehensive pre-placement training, career
                counseling, and industry exposure to ensure every student is
                well-prepared for their professional journey. Our placement
                record reflects our commitment to student success.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: TrendingUp, label: "Career Counseling" },
                  { icon: Users, label: "Mock Interviews" },
                  { icon: Award, label: "Aptitude Training" },
                  { icon: Briefcase, label: "Industry Connect" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2.5 bg-card border border-border rounded-lg p-3"
                    >
                      <div className="w-8 h-8 bg-gold/15 rounded flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-5">
                Placement Process
              </h3>
              <div className="space-y-4">
                {placementProcess.map((step) => (
                  <div
                    key={step.step}
                    className="flex gap-4 bg-card rounded-lg p-4 border border-border shadow-card"
                  >
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-navy-dark font-bold text-xs flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm mb-1">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter Partnerships */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Our Partners
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Recruiter Partnerships
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              We partner with leading companies across IT, manufacturing,
              infrastructure, and research sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {recruiters.map((company) => (
              <div
                key={company}
                className="bg-card border border-border rounded-lg p-4 flex items-center justify-center text-center hover:border-gold/40 hover:bg-navy-light/15 transition-all duration-200 shadow-card"
              >
                <div>
                  <Building className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                  <span className="text-xs font-semibold text-foreground leading-tight">
                    {company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Success Stories */}
      <section className="py-16 md:py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Success Stories
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Alumni Achievements
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alumni.map((alum) => (
              <div
                key={alum.name}
                className="bg-card rounded-xl border border-border shadow-card p-6 hover:shadow-card-hover transition-shadow duration-200"
              >
                <Quote className="w-8 h-8 text-gold/40 mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed italic mb-5">
                  "{alum.quote}"
                </p>
                <div className="border-t border-border pt-4 flex items-center gap-3">
                  <div className="w-11 h-11 bg-gold rounded-full flex items-center justify-center text-navy-dark font-bold text-sm flex-shrink-0">
                    {alum.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">
                      {alum.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {alum.batch}
                    </div>
                    <div className="text-xs text-gold font-medium mt-0.5">
                      {alum.role} · {alum.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
