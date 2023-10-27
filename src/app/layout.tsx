import StyledComponentsRegistry from "@/lib/AntdRegistry";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins,Roboto } from "next/font/google";

// const poppins = Poppins({ subsets: ['latin'], weight: ["400", '300', '500'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['300',"400","900"] });



export const metadata: Metadata = {
  
  title: "Create Next App",
  description: "Generated by create next app",
};





export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
