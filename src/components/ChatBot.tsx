import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const ABOUT_HUMNA = `You are a friendly AI assistant on Humna Mustafa's portfolio website. Humna is a Software Engineering student at COMSATS University Lahore, Pakistan. She works with Java, C++, Python, JavaScript, and tools like Git, Firebase, Docker. Her projects include CitizenConnect (civic engagement platform), PakUni (university info app), and SP26-OOP (Java design patterns). She's passionate about innovative software solutions. Answer questions about her work, skills, and background helpfully and concisely. If you don't know something specific, suggest the visitor reach out via the contact form.`;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! 👋 I'm Humna's AI assistant. Ask me anything about her skills, projects, or experience!" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    // Simple local response based on context (no backend needed)
    setTimeout(() => {
      const q = userMsg.content.toLowerCase();
      let response = "";

      if (q.includes("skill") || q.includes("tech") || q.includes("language")) {
        response = "Humna works with **Java, C++, C, Python, and JavaScript**. She's skilled in OOP design patterns, clean architecture, and uses tools like **Git, Firebase, Docker, and VS Code**. She's also learning React and full-stack development! 🚀";
      } else if (q.includes("project") || q.includes("work") || q.includes("built")) {
        response = "Humna has built some exciting projects:\n\n• **CitizenConnect** — A civic engagement platform connecting citizens with local government\n• **PakUni** — A mobile app for navigating Pakistan's university system\n• **SP26-OOP** — Java projects showcasing design patterns & clean architecture\n\nCheck them out in the Projects section above! 👆";
      } else if (q.includes("education") || q.includes("university") || q.includes("study")) {
        response = "Humna is pursuing a **BS in Software Engineering** at **COMSATS University, Lahore**. She's deeply focused on software design, OOP, and building real-world applications. 🎓";
      } else if (q.includes("contact") || q.includes("reach") || q.includes("hire") || q.includes("email")) {
        response = "You can reach Humna through the **Contact section** below, or connect with her on [LinkedIn](https://www.linkedin.com/in/humna-mustafa/) and [GitHub](https://github.com/humna-mustafa). She'd love to hear from you! 📬";
      } else if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
        response = "Hello! 👋 Great to meet you! I can tell you about Humna's skills, projects, education, or how to get in touch. What would you like to know?";
      } else if (q.includes("resume") || q.includes("cv")) {
        response = "You can download Humna's resume from the **Resume section** on this page. It covers her education, skills, and project experience! 📄";
      } else {
        response = "That's a great question! While I may not have the specific details, I'd suggest reaching out to Humna directly via the **Contact section** or her [LinkedIn](https://www.linkedin.com/in/humna-mustafa/). She's always happy to connect! 😊";
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[5000] w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-[5000] w-[350px] max-w-[calc(100vw-3rem)] rounded-2xl border border-border bg-background shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-border bg-primary/5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-bold text-sm">Humna's Assistant</p>
                  <p className="text-[11px] text-muted-foreground">Ask about skills, projects & more</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                    msg.role === "user" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                  }`}>
                    {msg.role === "user" ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                  </div>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-sm"
                      : "bg-muted rounded-tl-sm"
                  }`}>
                    {msg.content.split("\n").map((line, j) => (
                      <span key={j}>
                        {line.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/).map((part, k) => {
                          const boldMatch = part.match(/^\*\*(.*?)\*\*$/);
                          const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
                          if (boldMatch) return <strong key={k}>{boldMatch[1]}</strong>;
                          if (linkMatch) return <a key={k} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="underline">{linkMatch[1]}</a>;
                          return <span key={k}>{part}</span>;
                        })}
                        {j < msg.content.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center">
                    <Bot className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Humna..."
                  className="flex-1 bg-muted rounded-xl px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground/50 focus:ring-1 focus:ring-primary/30"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-50 hover:opacity-90 transition-opacity"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
