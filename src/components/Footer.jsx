import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rameez Ali. All rights reserved.
        </p>
        <motion.button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Back to top <ArrowUp className="h-4 w-4" />
        </motion.button>
      </div>
    </footer>
  );
}
