// "use client";
// import { Moon, Sun } from "lucide-react";

// export default function ThemeToggle({ isDark, toggle }: { isDark: boolean; toggle: () => void }) {
//   return (
//     <button onClick={toggle} className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
//       {isDark ? <Sun size={20} /> : <Moon size={20} />}
//     </button>
//   );
// }
"use client";

import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

export default function ThemeToggle({ isDark, toggle }: ThemeToggleProps) {
  return (
    <button
      onClick={toggle}
      className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
