import Header from "@/components/layout/Header";
import { Toaster } from "@/components/ui/toaster";
import ActiveSectionContextProvider from "@/context/active-section-context";
import TanstackProvider from "@/providers/TanstackProvider";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { Metadata } from "next";
import SmoothScroll from "@/components/utils/SmoothScroll";
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
            <TanstackProvider>
              <Header />
              {children}
              <Toaster />
            </TanstackProvider>
          </ActiveSectionContextProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
