import ParticlesBG from "./components/utils/ParticlesBg";
import ThemeToggle from "./components/ThemeToggle";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <main className="relative min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white transition-colors duration-500 overflow-x-hidden">
      <Toaster position="top-right" />
      <ParticlesBG />
      <ThemeToggle />
    </main>
  );
}
