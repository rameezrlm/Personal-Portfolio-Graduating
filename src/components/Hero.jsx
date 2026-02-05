import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const titles = [
  "Software Developer | MERN Stack | AI Enthusiast",
  "Building full-stack & intelligent applications.",
  "React enthusiast.",
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = titles[phraseIndex];
    const timeout = isDeleting ? 50 : 80;

    if (!isDeleting && displayText === phrase) {
      const id = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(id);
    }
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % titles.length);
      return;
    }

    const id = setTimeout(
      () =>
        setDisplayText(
          isDeleting
            ? phrase.slice(0, displayText.length - 1)
            : phrase.slice(0, displayText.length + 1),
        ),
      timeout,
    );
    return () => clearTimeout(id);
  }, [phraseIndex, displayText, isDeleting]);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Rameez_SoftwareDeveloper.pdf"; // only this
    link.download = "Rameez_SoftwareDeveloper.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-8"
    >
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="absolute bottom-20 left-1/2 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <motion.div
            className="h-32 w-32 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-2xl ring-2 ring-white/20 dark:ring-white/10"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-muted">
              <img
                src="/rameez.jpeg"
                alt="Rameez Ali"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          Rameez Ali
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 min-h-[2.5rem] text-lg text-muted-foreground sm:text-xl"
        >
          <span className="inline-block text-left">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-0.5 bg-primary align-middle"
            >
              |
            </motion.span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#projects" size="lg" className="gap-2">
            View Projects <ArrowRight className="h-4 w-4" />
          </Button>

          <Button href="#contact" variant="outline" size="lg" className="gap-2">
            Contact Me
          </Button>

          <Button onClick={downloadCV} variant="secondary" size="lg">
            Download CV
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex justify-center gap-4"
        >
          <a
            href="https://github.com/rameezrlm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full p-3 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-3 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:rameezliaqatdev@gmail.com"
            aria-label="Email"
            className="rounded-full p-3 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
        >
          <span className="text-xs">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
