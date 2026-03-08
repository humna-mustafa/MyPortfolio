import { motion } from "framer-motion";
import { Download, ArrowLeft, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import logoSvg from "@/assets/logo.svg";
import { useCallback } from "react";

const Resume = () => {
  const handleDownload = useCallback(() => {
    window.print();
  }, []);

  return (
    <>
      {/* Print-specific styles */}
      <style>{`
        @media print {
          body { background: white !important; color: black !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .print-page { padding: 0 !important; margin: 0 !important; max-width: 100% !important; }
          .resume-sheet { border: none !important; box-shadow: none !important; border-radius: 0 !important; background: white !important; padding: 32px 40px !important; }
          .resume-sheet * { color: black !important; }
          .resume-sheet .section-title { color: #1a365d !important; border-color: #1a365d !important; }
          .resume-sheet a { color: #2563eb !important; text-decoration: none !important; }
          .resume-sheet .divider { border-color: #d1d5db !important; }
          @page { margin: 0.4in; size: letter; }
        }
      `}</style>

      <main className="min-h-screen bg-background text-foreground">
        {/* Top bar - hidden on print */}
        <div className="no-print fixed top-0 inset-x-0 z-50 border-b border-border bg-background/85 backdrop-blur-2xl">
          <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground font-display font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </button>
              <img src={logoSvg} alt="HM Logo" className="h-8 w-8 rounded-full" />
            </div>
          </div>
        </div>

        <div className="pt-24 pb-20 px-4 md:px-6 max-w-4xl mx-auto print-page">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="resume-sheet rounded-2xl border border-border bg-card p-8 md:p-12 shadow-sm"
          >
            {/* ===== HEADER ===== */}
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-1">
                HUMNA MUSTAFA
              </h1>
              <p className="text-base text-muted-foreground font-display mb-2">
                Software Engineering Student
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span>Lahore, Pakistan</span>
                <span className="hidden sm:inline">•</span>
                <a href="mailto:humnamustafa01@gmail.com" className="text-primary hover:underline">humnamustafa01@gmail.com</a>
                <span className="hidden sm:inline">•</span>
                <a href="https://github.com/humna-mustafa" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/humna-mustafa</a>
                <span className="hidden sm:inline">•</span>
                <a href="https://www.linkedin.com/in/humna-mustafa" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a>
              </div>
            </div>

            <hr className="divider border-border mb-5" />

            {/* ===== OBJECTIVE ===== */}
            <ResumeSection title="OBJECTIVE">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Motivated Software Engineering student at COMSATS University Islamabad, Lahore Campus, seeking opportunities to apply strong foundations in Java, C++, Python, and full-stack web development. Passionate about building user-centered applications, contributing to open-source, and solving real-world problems through clean, scalable code.
              </p>
            </ResumeSection>

            {/* ===== EDUCATION ===== */}
            <ResumeSection title="EDUCATION">
              <ResumeEntry
                title="BS Software Engineering"
                org="COMSATS University Islamabad — Lahore Campus"
                date="2025 – 2029 (Expected)"
                bullets={[
                  "Relevant Coursework: Object-Oriented Programming, Data Structures & Algorithms, Database Systems, Software Design, Discrete Mathematics",
                ]}
              />
            </ResumeSection>

            {/* ===== TECHNICAL SKILLS ===== */}
            <ResumeSection title="TECHNICAL SKILLS">
              <div className="space-y-1.5 text-sm">
                <SkillRow label="Languages" value="Java, C++, C, Python, JavaScript, TypeScript, SQL" />
                <SkillRow label="Web & Frameworks" value="React, Node.js, HTML/CSS, Tailwind CSS, REST APIs" />
                <SkillRow label="Tools & Platforms" value="Git, GitHub, VS Code, IntelliJ IDEA, Firebase, Docker, Linux, Figma" />
                <SkillRow label="Concepts" value="OOP, Design Patterns, Data Structures, Algorithms, Agile/Scrum, Clean Architecture" />
              </div>
            </ResumeSection>

            {/* ===== PROJECTS ===== */}
            <ResumeSection title="PROJECTS">
              <ResumeEntry
                title="CitizenConnect"
                org="Civic Engagement Platform"
                date="2025"
                link="https://github.com/humna-mustafa/citizenconnect"
                bullets={[
                  "Developed a full-stack civic engagement platform connecting citizens with local government services",
                  "Built with React, TypeScript, and Firebase enabling transparent communication and community participation",
                  "Implemented real-time data handling and responsive UI for both desktop and mobile users",
                ]}
              />
              <ResumeEntry
                title="PakUni"
                org="University Discovery Platform"
                date="2026"
                link="https://github.com/humna-mustafa/PakUni"
                bullets={[
                  "Created a comprehensive university information app for Pakistan's higher education system",
                  "Implemented search and filtering capabilities to help students make informed university decisions",
                  "Designed intuitive UI/UX for seamless navigation across university profiles and resources",
                ]}
              />
              <ResumeEntry
                title="SP26-OOP"
                org="Academic — Object-Oriented Programming"
                date="2026"
                link="https://github.com/humna-mustafa/SP26-OOP"
                bullets={[
                  "Built multiple Java and C++ projects demonstrating design patterns and clean architecture principles",
                  "Implemented SOLID principles, inheritance hierarchies, and polymorphism in real-world scenarios",
                ]}
              />
            </ResumeSection>

            {/* ===== EXPERIENCE ===== */}
            <ResumeSection title="EXPERIENCE">
              <ResumeEntry
                title="Open Source Contributor"
                org="GitHub"
                date="2025 – Present"
                bullets={[
                  "Contributed to multiple open-source repositories across various technology stacks",
                  "Maintained personal projects with 175+ contributions demonstrating consistent development activity",
                  "Collaborated with developers globally through code reviews, issue tracking, and pull requests",
                ]}
              />
            </ResumeSection>

            {/* ===== PUBLICATIONS ===== */}
            <ResumeSection title="PUBLICATIONS">
              <ResumeEntry
                title='"How to Crack COMSATS Admission Test and NTS-NAT"'
                org="Medium — Sep 2025"
                link="https://medium.com/@humna-mustafa/how-to-crack-comsats-admission-test-and-nts-nat-f8acb35beda0"
                bullets={[
                  "Authored a comprehensive guide sharing proven strategies and preparation tips for COMSATS and NTS-NAT entrance exams",
                ]}
              />
            </ResumeSection>

            {/* ===== INTERESTS ===== */}
            <ResumeSection title="INTERESTS" last>
              <p className="text-sm text-muted-foreground">
                Open-Source Development • Civic Tech • Education Technology • UI/UX Design • Problem Solving • Community Building
              </p>
            </ResumeSection>
          </motion.div>
        </div>
      </main>
    </>
  );
};

/* ===== Reusable Sub-Components ===== */

const ResumeSection = ({ title, children, last }: { title: string; children: React.ReactNode; last?: boolean }) => (
  <div className={last ? "" : "mb-5"}>
    <h2 className="section-title text-sm font-bold font-display tracking-widest uppercase text-primary border-b-2 border-primary/30 pb-1 mb-3">
      {title}
    </h2>
    {children}
  </div>
);

const ResumeEntry = ({
  title,
  org,
  date,
  link,
  bullets,
}: {
  title: string;
  org: string;
  date?: string;
  link?: string;
  bullets?: string[];
}) => (
  <div className="mb-3 last:mb-0">
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
      <h3 className="text-sm font-semibold font-display">{title}</h3>
      {date && <span className="text-xs text-muted-foreground/70 shrink-0">{date}</span>}
    </div>
    <p className="text-sm text-muted-foreground">
      {org}
      {link && (
        <>
          {" — "}
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs">
            {link.replace("https://", "")}
          </a>
        </>
      )}
    </p>
    {bullets && bullets.length > 0 && (
      <ul className="mt-1 space-y-0.5 list-disc list-inside">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm text-muted-foreground leading-relaxed">{b}</li>
        ))}
      </ul>
    )}
  </div>
);

const SkillRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col sm:flex-row sm:gap-2">
    <span className="font-semibold font-display min-w-[140px] shrink-0">{label}:</span>
    <span className="text-muted-foreground">{value}</span>
  </div>
);

export default Resume;
