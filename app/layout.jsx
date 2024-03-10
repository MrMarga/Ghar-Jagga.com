import React from "react";
import Navbar from "@/components/Navbar";
import "@/assets/styles/global.css";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";

export const metadata = {
  title: "Ghar-Jagga.com",
  description: "Buy Or Sell Property Or Rent ",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Hero />
        <InfoBoxes />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
