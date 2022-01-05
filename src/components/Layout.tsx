import { Navbar } from "./Navbar";

import React from "react";
import { Footer } from "./Footer";
export default function Layout({ children }: any) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main
        className={`flex justify-center flex-col items-center flex-1 ${
          window.location.pathname.split("/")[1] === "tf-docs"
            ? "bg-tfBg-main"
            : ""
        }`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
