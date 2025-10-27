'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Home, Moon, Sun, Languages } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isDark, setIsDark] = useState(true); 
useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);
  const toggleTheme = () => setIsDark((prev) => !prev);

  const otherLocale = locale === 'en' ? 'gu' : 'en';

 const handleLanguageToggle = () => {
  const segments = pathname.split('/').filter(Boolean); 

  if (!segments.length || !['en', 'gu'].includes(segments[0])) {
    router.push(`/${otherLocale}`);
    return;
  }
  segments[0] = otherLocale;
  const newPath = '/' + segments.join('/');
  
  router.push(newPath);
};


  const goToLanding = () => router.push(`/${locale}`);
  const goToValuation = () => router.push(`/${locale}/valuate`);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10 ${
        isDark ? 'bg-gray-900/60 text-white' : 'bg-white/80 text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={goToLanding}
        >
          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
            <Home size={24} />
          </div>
          <span className="text-xl font-bold">BannaAI SmartVal</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={goToValuation}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium"
          >
            {t('startValuation')}
          </button>

          <button
            onClick={handleLanguageToggle}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors font-medium"
          >
            <Languages size={20} />
            <span>{otherLocale === 'en' ? 'English' : 'ગુજરાતી'}</span>
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
