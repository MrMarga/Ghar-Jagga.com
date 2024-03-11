import React from "react";
import properties from "@/properties";
import PropertyCard from "./PropertyCard";

const HomeFeatured = () => {
  const featuredProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 2);
  return (
    <section className="bg-blue-50 px-4 pt-6 pb-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProperties.length === 0 ? (
            <p>No properties</p>
          ) : (
            featuredProperties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatured;
