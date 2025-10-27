export type Language = "en" | "gu";

export interface PropertyFormData {
  propertyType: string;
  city: string;
  area: string;
  expectedPrice: string;
}

export interface ValuationResult {
  estimatedValue: number;
  confidence: string;
  priceRange: {
    min: number;
    max: number;
  };
  factors: string[];
}
