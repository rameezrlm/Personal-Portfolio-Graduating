import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          style={{ boxShadow: '0 0 40px rgba(99, 102, 241, 0.4)' }}
        />
        <motion.p
          className="text-sm font-medium text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
}
