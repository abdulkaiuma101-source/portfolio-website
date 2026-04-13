import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import MagneticCursor from "../components/MagneticCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abdul Kaium | GTM Strategist",
  description: "Portfolio of Abdul Kaium, GTM Strategist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable} antialiased selection:bg-[#DFFF00] selection:text-black`}>
        <MagneticCursor />
        {children}
      </body>
    </html>
  );
}
