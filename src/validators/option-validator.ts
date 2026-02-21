// bg-zinc-950 border-zinc-950 bg-blue-950 border-blue-950 bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
  { label: "Black", value: "black", tw: "zinc-950" },
  { label: "Blue", value: "blue", tw: "blue-950" },
  { label: "Rose", value: "rose", tw: "rose-950" },
] as const;

export const MODELS = {
  name: "models",
  options: [
    { label: "iPhone X", value: "iPhoneX" },
    { label: "iPhone 11", value: "iPhone11" },
    { label: "iPhone 12", value: "iPhone12" },
    { label: "iPhone 13", value: "iPhone13" },
    { label: "iPhone 14", value: "iPhone14" },
    { label: "iPhone 15", value: "iPhone15" },
    { label: "iPhone 16", value: "iPhone16" },
    { label: "iPhone 17", value: "iPhone17" },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      description:
        "A lightweight yet durable material engineered for impact resistance and long-term protection",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const;

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth Finish",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured",
      value: "textured",
      description:
        "Adds a subtle raised pattern that enhances grip and reduces slipping",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
