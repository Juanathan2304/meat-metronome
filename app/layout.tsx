import type { Metadata } from "next";
import "./globals.css";
import Header from "@/ui/components/header";


export const metadata: Metadata = {
  title: "Meat Metronome",
  description: `A timer and agenda organizer to keep your "meats" flowing`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col antialiased min-w-screen min-h-screen`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
