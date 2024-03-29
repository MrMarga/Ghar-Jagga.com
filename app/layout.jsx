import React from "react";
import Navbar from "@/components/Navbar";
import "@/assets/styles/global.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ghar-Jagga.com",
  description: "Buy Or Sell Property Or Rent ",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
