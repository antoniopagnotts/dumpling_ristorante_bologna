import { Plus_Jakarta_Sans, Be_Vietnam_Pro, EB_Garamond } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Dumpling Bologna",
  description: "I migliori dumpling di Bologna, preparati a mano ogni giorno.",
  icons: {
    icon: "/gyoza_icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="it"
      className={`${plusJakarta.variable} ${beVietnam.variable} ${ebGaramond.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col font-body-lg">{children}</body>
    </html>
  );
}
