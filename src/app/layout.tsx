"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import TopBar from "@/components/topbar";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      {/* <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}> */}
      <head />

      <body suppressHydrationWarning className={`bg-[#FFFFFF]  ${inter.className}`}>
        <Providers>
          {/* <TopBar/> */}
          {/* <TopBar/> */}
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}



