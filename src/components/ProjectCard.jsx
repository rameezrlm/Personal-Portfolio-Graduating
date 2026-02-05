import { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';

function useTilt() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 300, damping: 25 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), spring);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), spring);

  const ref = useRef(null);
  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const relX = (e.clientX - centerX) / rect.width;
    const relY = (e.clientY - centerY) / rect.height;
    x.set(relX);
    y.set(relY);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, style: { rotateX, rotateY }, handleMove, handleLeave };
}

export default function ProjectCard({ project }) {
  const tilt = useTilt();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.div
      ref={tilt.ref}
      onMouseMove={tilt.handleMove}
      onMouseLeave={tilt.handleLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
        ...tilt.style,
      }}
    >
      <Card className="group h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-shadow hover:shadow-soft dark:hover:shadow-soft-dark">
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onLoad={() => setImgLoaded(true)}
          />
          {!imgLoaded && (
            <div className="absolute inset-0 animate-pulse bg-muted" />
          )}
        </div>
        <CardContent className="p-5">
          <h3 className="font-semibold text-foreground">{project.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t} variant="secondary" className="text-xs">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2 p-5 pt-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Github className="h-4 w-4" /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" /> Live
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

