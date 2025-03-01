
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/SideBar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: ">_ Samitha Sandaruwan",
  description: "Portfolio For Next-Gen",
};

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased page-content`}
      >
        <div className="flex flex-col h-screen">
          <Navbar />

          <div className="flex flex-grow">
            <Sidebar />

            <div className="flex-grow bg-[#1e1e1e] text-white">{children}</div>
          </div>
        </div>
        {/* <Navbar/> */}
      </body>
    </html>
  );
}
