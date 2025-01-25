import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import ToasterProvider from "./Providers/ToasterProvider";
import RegisterModal from "./Components/Modals/RegisterModal";

const geistSans = Nunito({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Holiday Rentals",
  description: "Get Rentals for your Dream Destinations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
