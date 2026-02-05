import { motion } from 'framer-motion';

const bio = `I'm a Software Developer focused on the MERN stack, React, and AI. I enjoy building full-stack applications, exploring compiler design, and experimenting with NLP and LangChain. I hold a BSCS from UCP with a CGPA of 3.77 and have experience as a MERN intern and Teaching Assistant.`;

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About <span className="gradient-text">me</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">{bio}</p>
          <div className="mt-10 rounded-2xl glass-card p-6 sm:p-8">
            <h3 className="text-lg font-semibold">Education</h3>
            <p className="mt-2 text-muted-foreground">
              <strong className="text-foreground">BSCS</strong> — University of Central Punjab (UCP) · CGPA 3.77
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
