import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';

const EMAIL = 'rameezliaqatdev@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${EMAIL}?subject=Portfolio contact&body=${encodeURIComponent(formState.message)}`;
    window.open(mailto);
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Get in <span className="gradient-text">touch</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl glass-card p-6 sm:p-10"
        >
          <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-6">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="rameezliaqatdev@email.com"
                value={formState.email}
                onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message..."
                value={formState.message}
                onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                required
                rows={5}
                className="w-full resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Send message
            </Button>
          </form>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-border pt-10">
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Mail className="h-4 w-4" />}
              {copied ? 'Copied!' : EMAIL}
            </button>
            <a
              href="https://github.com/rameezrlm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/malikrameezliaqat/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
