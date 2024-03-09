import React from "react";
import "@/assets/styles/global.css";

export const metadata = {
  title: "Ghar-Jagga.com",
  description: "Buy Or Sell Property Or Rent ",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default MainLayout;
