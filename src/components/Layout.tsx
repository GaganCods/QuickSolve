import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20 relative overflow-x-clip">
      {/* Global glow behind everything */}
      <div className="glow-background w-[800px] h-[800px] top-[-200px] left-1/2 -translate-x-1/2 opacity-40 mix-blend-screen"></div>

      <Header />
      <main className="flex-1 flex flex-col w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
