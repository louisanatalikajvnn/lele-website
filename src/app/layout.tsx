import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import WhatsAppButton from "../components/global/WhatsappButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

// const montserrat = Montserrat({
//   subsets: ['latin'],
//   weight: "100"
// });

export const metadata: Metadata = {
  title: "LeLe Mandarin",
  description: "LeLe Mandarin Learning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
            <WhatsAppButton />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
