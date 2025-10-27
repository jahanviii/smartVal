"use client";
import { use, useState } from "react";
import { Language, PropertyFormData, ValuationResult } from "@/app/lib/types";
import ResultPage from "../../components/result/page";
import ValuationForm from "../../components/form/page";
import { mockValuationAPI } from "@/app/lib/api";

export default function ValuationPage({ params }: { params: Promise<{ locale: Language }> }) {
  const { locale } = use(params);
    const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ValuationResult | null>(null);

  const handleSubmit = async (data: PropertyFormData) => {
    setIsLoading(true);
    try {
      const res = await mockValuationAPI(data)
      setResult(res);

    } catch (error) {
      console.error("Error fetching valuation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return result ? (
    <ResultPage
      lang={locale}
      result={result}
      onTryAgain={() => setResult(null)}
    />
  ) : (
    <ValuationForm lang={locale} onSubmit={handleSubmit} isLoading={isLoading} />
  );
}
