import { PropertyFormData, ValuationResult } from "./types";

export async function mockValuationAPI(
  data: PropertyFormData
): Promise<ValuationResult> {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const basePrice = parseInt(data.expectedPrice);
  const adjustment = (Math.random() - 0.5) * 0.2;
  const estimatedValue = Math.round(basePrice * (1 + adjustment));

  return {
    estimatedValue,
    confidence:
      basePrice > 5000000 ? "high" : basePrice > 2000000 ? "medium" : "low",
    priceRange: {
      min: Math.round(estimatedValue * 0.9),
      max: Math.round(estimatedValue * 1.1),
    },
    factors: [
      "Market trends in selected area",
      "Property size and type comparison",
      "Recent transaction data",
      "Location amenities score",
    ],
  };
}
