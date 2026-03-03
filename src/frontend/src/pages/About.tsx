import {
  Award,
  BookOpen,
  Eye,
  Globe,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const goals = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    desc: "Maintain the highest standards of academic quality through rigorous curriculum and continuous improvement.",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    desc: "Foster a culture of research, innovation, and entrepreneurship among students and faculty.",
  },
  {
    icon: Users,
    title: "Holistic Development",
    desc: "Develop well-rounded engineers with strong technical, communication, and leadership skills.",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    desc: "Provide international exposure through collaborations, exchange programs, and global industry partnerships.",
  },
  {
    icon: TrendingUp,
    title: "Industry Readiness",
    desc: "Ensure graduates are industry-ready with practical skills and professional competencies.",
  },
  {
    icon: Award,
    title: "Ethical Leadership",
    desc: "Instill values of integrity, social responsibility, and ethical professional conduct.",
  },
];

export default function About() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-navy py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
            Who We Are
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-4" />
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
            Learn about our history, vision, leadership, and the values that
            drive academic excellence at Marik Institute of Technology.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Our Direction
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              Vision & Mission
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy rounded-xl p-8 text-white">
              <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gold">Our Vision</h3>
              <p className="text-white/80 leading-relaxed text-sm">
                To be a globally recognized institution of engineering and
                technology excellence, producing innovative, ethical, and
                socially responsible engineers who contribute meaningfully to
                national development and global progress.
              </p>
              <p className="text-white/80 leading-relaxed text-sm mt-3">
                We envision a future where our graduates lead transformative
                change across industries, driven by a deep commitment to
                knowledge, integrity, and human advancement.
              </p>
            </div>
            <div className="bg-secondary/40 border border-border rounded-xl p-8">
              <div className="w-14 h-14 bg-navy/10 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-navy" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-navy">Our Mission</h3>
              <ul className="space-y-3">
                {[
                  "Provide quality technical education through innovative teaching methodologies and industry-aligned curriculum.",
                  "Foster research, innovation, and entrepreneurship to address real-world engineering challenges.",
                  "Build strong industry-academia partnerships for practical learning and career development.",
                  "Develop students with strong ethical values, leadership qualities, and global perspectives.",
                  "Create an inclusive and supportive learning environment that nurtures every student's potential.",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <div className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              From the Leadership
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              Director's Message
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto" />
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-card border border-border overflow-hidden">
              <div className="bg-navy p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-gold/40">
                  <span className="text-gold text-2xl font-bold">DR</span>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-white font-bold text-xl">
                    Dr. Rajendra Kumar Sharma
                  </h3>
                  <p className="text-gold text-sm font-medium mt-1">
                    Director, Marik Institute of Technology
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    Ph.D. (IIT Delhi) | 25+ Years in Academia & Research
                  </p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <blockquote className="text-muted-foreground leading-relaxed text-sm md:text-base italic border-l-4 border-gold pl-5 mb-5">
                  "At Marik Institute of Technology, we believe that education
                  is not merely the transfer of knowledge — it is the
                  transformation of individuals. Our mission is to create
                  engineers who are not only technically proficient but also
                  innovative thinkers, ethical leaders, and responsible
                  citizens."
                </blockquote>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  We have built an institution that combines rigorous academic
                  standards with a nurturing environment where students can
                  explore, experiment, and excel. Our faculty brings together
                  decades of academic and industry experience, ensuring that
                  every student receives mentorship of the highest caliber.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  I invite you to join our community of learners, innovators,
                  and future leaders. Together, we will build a better tomorrow
                  through the power of engineering and technology.
                </p>
                <div className="mt-6 pt-5 border-t border-border">
                  <p className="text-navy font-semibold text-sm">
                    Dr. Rajendra Kumar Sharma
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Director, Marik Institute of Technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Philosophy */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                Our Approach
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Academic Philosophy
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
                Our academic philosophy is rooted in the belief that true
                engineering education must seamlessly integrate theoretical
                knowledge with practical application. We design our curriculum
                to challenge students intellectually while equipping them with
                the hands-on skills demanded by modern industry.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
                We embrace a student-centric approach where learning is active,
                collaborative, and inquiry-driven. Our faculty serves as mentors
                and guides, fostering critical thinking, problem-solving, and
                creative innovation in every classroom and laboratory.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Research and innovation are not confined to postgraduate
                programs — we encourage undergraduate students to engage in
                research projects, participate in technical competitions, and
                contribute to real-world problem-solving from their very first
                year.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: "Theory + Practice",
                  desc: "Balanced curriculum integrating classroom learning with lab work",
                },
                {
                  label: "Student-Centric",
                  desc: "Personalized mentoring and active learning methodologies",
                },
                {
                  label: "Research-Driven",
                  desc: "Encouraging innovation and research at all academic levels",
                },
                {
                  label: "Industry-Aligned",
                  desc: "Curriculum updated regularly with industry inputs and trends",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-secondary/50 border border-border rounded-lg p-4"
                >
                  <div className="w-2 h-2 bg-gold rounded-full mb-2" />
                  <h4 className="font-bold text-navy text-sm mb-1">
                    {item.label}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Goals */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Our Commitments
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              Institutional Goals
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Our strategic goals guide every decision we make in pursuit of
              academic excellence and student success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {goals.map((goal) => {
              const Icon = goal.icon;
              return (
                <div
                  key={goal.title}
                  className="bg-white rounded-lg p-6 shadow-card border border-border hover:border-gold/40 hover:shadow-card-hover transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-bold text-navy text-base mb-2">
                    {goal.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {goal.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
