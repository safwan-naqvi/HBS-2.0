import Header from "@/components/layout/Header";
import { Toaster } from "@/components/ui/toaster";
import SmoothScroll from "@/components/utils/SmoothScroll";
import ActiveSectionContextProvider from "@/context/active-section-context";
import TanstackProvider from "@/providers/TanstackProvider";
import { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

const poppins = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "HashBitStudio | Digital Services Agency",
    template: "%s - HashBitStudio"
  },
  description: "Your trusted partner for end-to-end digital solutions. We specialize in design, development and deployment, helping businesses to dominate in digital landscape",
  keywords: ["hashbitstudio", "hbs", "hashbit"],
  twitter: {
    card: "summary_large_image"
  }
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
