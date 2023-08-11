import { Navbar } from "./Navbar";

import React from "react";
import { Footer } from "./Footer";
import { GA } from "./GA";
export default function Layout({ children }: any) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex justify-center flex-col items-center flex-1`}>
        {children}
      </main>
      <Footer />
      <GA />
    </div>
  );
}
