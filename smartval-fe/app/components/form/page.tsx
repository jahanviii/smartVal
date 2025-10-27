"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Language, PropertyFormData } from "@/app/lib/types";
import { useTranslations } from "next-intl";

export default function ValuationForm({
  lang,
  onSubmit,
  isLoading,
  goBack,
}: {
  lang: Language;
  onSubmit: (data: PropertyFormData) => void;
  isLoading: boolean;
  goBack?: () => void;
}) {
  const t = useTranslations("home.form");
  const router = useRouter();

  const [formData, setFormData] = useState<PropertyFormData>({
    propertyType: "",
    city: "",
    area: "",
    expectedPrice: "",
  });

  const [errors, setErrors] = useState<Partial<PropertyFormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<PropertyFormData> = {};
    if (!formData.propertyType) newErrors.propertyType = t("errors.required");
    if (!formData.city) newErrors.city = t("errors.required");
    if (!formData.area || parseInt(formData.area) < 100)
      newErrors.area = t("errors.minArea");
    if (!formData.expectedPrice || parseInt(formData.expectedPrice) < 100000)
      newErrors.expectedPrice = t("errors.minPrice");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) onSubmit(formData);
  };

  const handleBack = () => {
    router.push(`/${lang}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full">
        <button
          onClick={handleBack}
          className="mb-4 flex items-center gap-2 text-blue-400 hover:text-blue-500 font-medium"
        >
          <ArrowLeft size={20} />
         Back
        </button>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t("title")}
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                {t("propertyType")}
              </label>
              <select
                value={formData.propertyType}
                onChange={(e) =>
                  setFormData({ ...formData, propertyType: e.target.value })
                }
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option value="" className="text-black">{t("propertyTypePlaceholder")}</option>
                <option value="apartment" className="text-black">{t("propertyTypes.apartment")}</option>
                <option value="villa" className="text-black">{t("propertyTypes.villa")}</option>
                <option value="plot" className="text-black">{t("propertyTypes.plot")}</option>
                <option value="commercial" className="text-black">
                  {t("propertyTypes.commercial")}
                </option>
              </select>
              {errors.propertyType && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.propertyType}
                </p>
              )}
            </div>

            {["city", "area", "expectedPrice"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-2">
                  {t(field)}
                </label>
                <input
                  type={field === "city" ? "text" : "number"}
                  value={formData[field as keyof PropertyFormData]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [field]: e.target.value,
                    })
                  }
                  placeholder={t(`${field}Placeholder`)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                {errors[field as keyof PropertyFormData] && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors[field as keyof PropertyFormData]}
                  </p>
                )}
              </div>
            ))}

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  {t("submitting")}
                </>
              ) : (
                t("submit")
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
