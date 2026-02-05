import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectFilters } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Projects <span className="gradient-text">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-muted-foreground"
        >
          Filter by technology
        </motion.p>
        <div className="mt-6 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <Button
              key={f.id}
              variant={filter === f.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(f.id)}
              className={cn(filter === f.id && 'ring-2 ring-primary/30')}
            >
              {f.label}
            </Button>
          ))}
        </div>
        <motion.div
          layout
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
