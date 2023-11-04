import StyledComponentsRegistry from "@/lib/AntdRegistry";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Sheared/Header";
import Footer from "@/components/Sheared/Footer";

// const poppins = Poppins({ subsets: ['latin'], weight: ["400", '300', '500'] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "900"] });

export const metadata: Metadata = {
  title: "Mr Ali",
  description: "Generated by create next app",
  // icons:{
  //   icon:"https://i.ibb.co/j3fDZYd/IMG-20231018-160911.jpg",
  //   apple:"https://i.ibb.co/j3fDZYd/IMG-20231018-160911.jpg"
  // }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Footer />
      </body>
    </html>
  );
}
