import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import articleComsatsImg from "@/assets/article-comsats.png";

const articles = [
  {
    title: "How to Crack COMSATS Admission Test and NTS-NAT",
    excerpt: "A data-driven guide that helped 10K+ readers prepare strategically — proving I don't just write code, I write impact.",
    date: "Sep 2025",
    readTime: "4 min read",
    tags: ["Education", "COMSATS"],
    url: "https://medium.com/@humna-mustafa/how-to-crack-comsats-admission-test-and-nts-nat-f8acb35beda0",
    image: articleComsatsImg,
  },
];

const ArticlesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="articles" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/50" />
            <p className="text-sm tracking-[0.2em] uppercase text-primary font-display">Articles</p>
          </div>
          <div className="flex items-end justify-between">
            <h2 className="text-3xl md:text-5xl font-bold font-display">
              Latest <span className="gradient-text">writings</span>
            </h2>
            <a
              href="https://medium.com/@humna-mustafa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline hidden md:flex items-center gap-1 font-display"
            >
              View all on Medium <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-1 max-w-lg gap-6">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-[0_0_40px_-15px_hsl(var(--primary)/0.2)] transition-all duration-500"
            >
              <div className="aspect-[2/1] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground font-display">{article.date}</span>
                  <span className="text-xs text-muted-foreground/50">•</span>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>

                <h3 className="font-display text-lg font-bold mb-3 group-hover:gradient-text transition-all duration-300 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                  <div className="flex gap-2">
                    {article.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center md:hidden"
        >
          <a
            href="https://medium.com/@humna-mustafa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline inline-flex items-center gap-1 font-display"
          >
            View all on Medium <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;
