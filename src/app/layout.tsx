import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import '@/styles/app.scss';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio de Yoelvys Perez Cabrera",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
