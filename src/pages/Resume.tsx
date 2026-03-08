import { motion } from "framer-motion";
import { Download, FileText, ExternalLink, ArrowLeft, GraduationCap, Briefcase, Code, Award } from "lucide-react";
import { Link } from "react-router-dom";
import logoSvg from "@/assets/logo.svg";

const Resume = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/85 backdrop-blur-2xl">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <img src={logoSvg} alt="HM Logo" className="h-8 w-8 rounded-full" />
        </div>
      </div>

      <div className="pt-24 pb-20 px-4 md:px-6 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/50" />
            <p className="text-sm tracking-[0.2em] uppercase text-primary font-display">Resume</p>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">
            Humna <span className="gradient-text">Mustafa</span>
          </h1>
          <p className="text-muted-foreground text-lg">Software Engineering Student • COMSATS University Lahore</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <a
              href="#"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-display font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Download className="h-4 w-4 group-hover:animate-bounce" />
              Download PDF
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-display font-medium text-sm hover:bg-primary/5 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              View Online
            </a>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-12">
          {/* Education */}
          <ResumeBlock
            icon={<GraduationCap className="h-5 w-5" />}
            title="Education"
            delay={0.1}
            items={[
              {
                title: "BS Software Engineering",
                subtitle: "COMSATS University Islamabad — Lahore Campus",
                date: "2025 – 2029 (Expected)",
                details: ["Relevant coursework: OOP, Data Structures, Algorithms, Database Systems, Software Design"],
              },
            ]}
          />

          {/* Experience */}
          <ResumeBlock
            icon={<Briefcase className="h-5 w-5" />}
            title="Experience"
            delay={0.2}
            items={[
              {
                title: "Open Source Contributor",
                subtitle: "GitHub — Various Projects",
                date: "2024 – Present",
                details: [
                  "Contributed to multiple open-source repositories",
                  "Built and maintained personal projects with 175+ contributions",
                ],
              },
            ]}
          />

          {/* Skills */}
          <ResumeBlock
            icon={<Code className="h-5 w-5" />}
            title="Technical Skills"
            delay={0.3}
            items={[
              {
                title: "Languages",
                subtitle: "Java, C++, C, Python, JavaScript, TypeScript, SQL",
              },
              {
                title: "Frameworks & Tools",
                subtitle: "React, Git, GitHub, Firebase, Docker, VS Code, IntelliJ IDEA",
              },
              {
                title: "Concepts",
                subtitle: "OOP, Data Structures, Algorithms, REST APIs, Agile/Scrum",
              },
            ]}
          />

          {/* Projects */}
          <ResumeBlock
            icon={<Award className="h-5 w-5" />}
            title="Key Projects"
            delay={0.4}
            items={[
              {
                title: "CitizenConnect",
                subtitle: "Civic engagement platform connecting citizens with local government",
                details: ["Built with React, TypeScript, and Firebase"],
              },
              {
                title: "PakUni",
                subtitle: "University discovery platform for Pakistani students",
                details: ["Full-stack application with search and filtering capabilities"],
              },
              {
                title: "SP26-OOP",
                subtitle: "Object-Oriented Programming coursework and projects in Java/C++",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
};

interface ResumeItem {
  title: string;
  subtitle: string;
  date?: string;
  details?: string[];
}

const ResumeBlock = ({
  icon,
  title,
  delay,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  delay: number;
  items: ResumeItem[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 md:p-8"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
        {icon}
      </div>
      <h2 className="text-xl font-bold font-display">{title}</h2>
    </div>
    <div className="space-y-6">
      {items.map((item, i) => (
        <div key={i} className="pl-4 border-l-2 border-primary/20">
          <h3 className="font-semibold font-display">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.subtitle}</p>
          {item.date && <p className="text-xs text-muted-foreground/60 mt-1">{item.date}</p>}
          {item.details && (
            <ul className="mt-2 space-y-1">
              {item.details.map((d, j) => (
                <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </motion.div>
);

export default Resume;
