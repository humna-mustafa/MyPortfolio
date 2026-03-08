import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MapPin, Mail, ArrowUpRight, Loader2 } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("contact_messages")
        .insert({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        });

      if (error) throw error;

      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-background/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all placeholder:text-muted-foreground/50";

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[150px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/50" />
            <p className="text-sm tracking-[0.2em] uppercase text-primary font-display">Contact</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display">
            Let's <span className="gradient-text">connect</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm always open to new opportunities, collaborations, and
              interesting conversations. Whether you have a project idea or
              just want to say hi — drop me a message!
            </p>

            <div className="space-y-4">
              <motion.a
                href="mailto:humnamustafa01@gmail.com"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 text-muted-foreground group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">humnamustafa01@gmail.com</span>
              </motion.a>
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 text-muted-foreground group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">Lahore, Pakistan</span>
              </motion.div>
            </div>

            <div className="pt-4 space-y-3">
              <MagneticButton
                as="a"
                href="https://github.com/humna-mustafa"
                className="inline-flex items-center gap-2 text-primary font-display font-medium text-sm group"
              >
                GitHub Profile
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
              <br />
              <MagneticButton
                as="a"
                href="https://www.linkedin.com/in/humna-mustafa/"
                className="inline-flex items-center gap-2 text-primary font-display font-medium text-sm group"
              >
                LinkedIn Profile
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
              <br />
              <MagneticButton
                as="a"
                href="https://g.dev/humna-mustafa"
                className="inline-flex items-center gap-2 text-primary font-display font-medium text-sm group"
              >
                Google Dev Profile
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-3 glass-card border border-border p-8 space-y-5 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] pointer-events-none" />

            <div className="relative space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-display font-medium text-muted-foreground mb-1.5 block uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    required
                    className={inputClasses}
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="text-xs font-display font-medium text-muted-foreground mb-1.5 block uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    required
                    className={inputClasses}
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-display font-medium text-muted-foreground mb-1.5 block uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  required
                  className={inputClasses}
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                />
              </div>
              <div>
                <label className="text-xs font-display font-medium text-muted-foreground mb-1.5 block uppercase tracking-wider">Message</label>
                <textarea
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-display font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {isSubmitting ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                ) : (
                  <>Send Message <Send className="h-4 w-4" /></>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
