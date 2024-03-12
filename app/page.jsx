import React from "react";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
import HomeFeatured from "@/components/HomeFeatured";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <InfoBoxes />
      <HomeFeatured />
      <HomeProperties />
    </div>
  );
};

export default HomePage;
