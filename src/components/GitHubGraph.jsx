import { motion } from "framer-motion";

export default function GitHubGraph() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl glass-card p-6"
    >
      <h3 className="text-lg font-semibold">GitHub Activity</h3>

      <p className="mt-1 text-sm text-muted-foreground">
        Live contribution graph
      </p>

      <div className="mt-4 overflow-x-auto">
        <img
          src="https://ghchart.rshah.org/rameezrlm"
          alt="Rameez Ali GitHub Contributions"
          className="w-full rounded-lg"
        />
      </div>
    </motion.section>
  );
}
