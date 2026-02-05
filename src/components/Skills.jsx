import { motion } from 'framer-motion';
import { skillCategories } from '@/data/skills';
import { Progress } from '@/components/ui/Progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Skills <span className="gradient-text">& tools</span>
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={item}>
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm transition-shadow hover:shadow-soft dark:hover:shadow-soft-dark">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="mt-1" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
