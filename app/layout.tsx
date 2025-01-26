import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import ToasterProvider from "./Providers/ToasterProvider";
import RegisterModal from "./Components/Modals/RegisterModal";
import LoginModal from "./Components/Modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUsers";
import RentModal from "./Components/Modals/RentModal";

const geistSans = Nunito({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Holiday Rentals",
  description: "Get Rentals for your Dream Destinations",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
        <ToasterProvider />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser}/>
        {children}
      </body>
    </html>
  );
}
