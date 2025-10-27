import { Check, Home, TrendingUp, Camera } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function LandingPage() {
  const t = await getTranslations("home");

  const features = [
    { icon: TrendingUp, key: "ai" },
    { icon: Check, key: "accurate" },
    { icon: Camera, key: "instant" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-5xl w-full text-center space-y-12 animate-fade-in">
        <div className="flex justify-center">
          <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl">
            <Home size={64} className="text-white" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 hover:scale-[1.03] transition-all duration-300 shadow-lg"
            >
              <feature.icon size={36} className="mb-4 text-blue-400 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">
                {t(`features.${feature.key}.title`)}
              </h3>
              <p className="text-gray-400 text-sm">
                {t(`features.${feature.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
