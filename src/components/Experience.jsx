import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experiences } from '@/data/experience';

const icons = { briefcase: Briefcase, 'graduation-cap': GraduationCap };

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Experience <span className="gradient-text">.</span>
        </motion.h2>
        <div className="mt-14">
          <div className="relative border-l-2 border-border pl-8 sm:pl-10">
            {experiences.map((exp, i) => {
              const Icon = icons[exp.icon] || Briefcase;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative pb-12 last:pb-0"
                >
                  <span className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground shadow">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="rounded-xl glass-card p-6 transition-shadow hover:shadow-soft dark:hover:shadow-soft-dark">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="mt-1 text-primary font-medium">{exp.company}</p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
