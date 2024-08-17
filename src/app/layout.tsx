import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ActiveSectionContextProvider from "@/context/active-section-context";
import SmoothScroll from "@/components/utils/SmoothScroll";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "HashBitStudio | Digital Services Agency",
  description: "Design | Develop | Dominate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SmoothScroll>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster />
          </ActiveSectionContextProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
