"use client";

import React from "react";
import { Check } from "lucide-react";
import { ValuationResult, Language } from "@/app/lib/types";
import { useTranslations } from "next-intl";

export default function ResultPage({
  lang,
  result,
  onTryAgain,
}: {
  lang: Language;
  result: ValuationResult;
  onTryAgain: () => void;
}) {
  const t = useTranslations(); 

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-2xl space-y-8">
          <h2 className="text-3xl font-bold text-center">{t("result.title")}</h2>

          <div className="text-center p-8 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl border border-blue-500/30">
            <p className="text-sm text-gray-300 mb-2">{t("result.estimatedValue")}</p>
            <p className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ₹{result.estimatedValue.toLocaleString("en-IN")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400 mb-2">{t("result.confidence")}</p>
              <p className="text-lg font-semibold">
                {t(`confidence.${result.confidence}`)}
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400 mb-2">{t("result.priceRange")}</p>
              <p className="text-lg font-semibold">
                ₹{result.priceRange.min.toLocaleString("en-IN")} – ₹
                {result.priceRange.max.toLocaleString("en-IN")}
              </p>
            </div>
          </div>

          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <p className="text-sm text-gray-400 mb-4">{t("result.keyFactors")}</p>
            <ul className="space-y-2">
              {result.factors.map((factor, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={onTryAgain}
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            {t("result.tryAgain")}
          </button>
        </div>
      </div>
    </div>
  );
}
