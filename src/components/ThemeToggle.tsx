import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-6 right-6 z-[999] p-3 rounded-full shadow-lg bg-zinc-200 dark:bg-zinc-800 hover:scale-110 transition-all"
    >
      <motion.div
        key={resolvedTheme}
        initial={{ rotate: 0 }}
        animate={{ rotate: 180 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {isDark ? (
          <Sun size={22} className="text-yellow-400" />
        ) : (
          <Moon size={22} className="text-indigo-500 rotate-[90deg]" />
        )}
      </motion.div>
    </motion.button>
  );
}
