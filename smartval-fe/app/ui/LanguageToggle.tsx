// "use client";
// import { Language } from "@/app/lib/types";
// import { Languages } from "lucide-react";

// export default function LanguageToggle({ lang }: { lang: Language}) {
//   return (
//     <button
//       onClick={() => setLang(lang === "en" ? "gu" : "en")}
//       className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
//     >
//       <Languages size={20} />
//       <span className="font-medium">{lang === "en" ? "ગુજરાતી" : "English"}</span>
//     </button>
//   );
// }

"use client";

import { Language } from "@/app/lib/types";
import { Languages } from "lucide-react";

interface LanguageToggleProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function LanguageToggle({ lang, setLang }: LanguageToggleProps) {
  const toggleLang = () => {
    setLang(lang === "en" ? "gu" : "en");
  };

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
      aria-label="Toggle language"
    >
      <Languages size={20} />
      <span className="font-medium">{lang === "en" ? "ગુજરાતી" : "English"}</span>
    </button>
  );
}
