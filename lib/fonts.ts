import { Cormorant_Garamond, Figtree } from "next/font/google";

/** French-flavoured display serif — headings only, used with restraint. */
export const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/** Clean humanist sans for body copy and UI. */
export const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const fontClasses = `${cormorant.variable} ${figtree.variable}`;
