import { clsx, type ClassValue } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CAD",
  });
  return formatter.format(price);
};

export function constructMetadata({
  title = "caseKodiak",
  description = "Create custom high-quality phone cases FAST",
  image = "/thumbnail.png",
  icons = "/WebLogo.png",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    metadataBase: new URL("https://case-kodiak.vercel.app"),
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    icons: icons,
  };
}
