import type { Metadata } from "next";
import { Inter, Playfair_Display, Bodoni_Moda, Big_Shoulders_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Provider";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const inter = Inter({ subsets: ["latin"] });

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-playfair",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["900"],
  style: ["italic"],
  variable: "--font-bodoni",
});

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--font-big-shoulders",
});

export const metadata: Metadata = {
  title: "Abhay's Portfolio",
  description: "Created with 💓",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} ${bodoni.variable} ${bigShoulders.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
