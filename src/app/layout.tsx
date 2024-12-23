import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import '@/styles/app.scss';
import { ReactNode } from "react";
import { Navigator } from "@/components/common/Navigator";
import { Header } from "@/components/sections/Header";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yoelvys | Frontend Developer",
  description: "I am Yoelvys, a frontend developer specialized in Next.js, React, and modern technologies. Explore my portfolio featuring innovative projects, advanced animations, and scalable solutions.",
  authors: [{ name: "Yoelvys Perez Cabrera" }],
};

export default function RootLayout({
  modal
}: Readonly<{
  modal: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <div className="page">
          <Navigator />
          <main id="main">
            <Header />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
            <Footer />
          </main>
        </div>
        {modal}
      </body>
    </html>
  );
}
