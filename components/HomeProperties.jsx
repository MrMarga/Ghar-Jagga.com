import React from "react";
import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";

const HomeProperties = () => {
  const recentProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  return (
    <>
      <section className="bg-blue-50 px-4 pt-6 pb-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProperties === 0 ? (
              <p>No Properties</p>
            ) : (
              recentProperties.map((property) => (
                <PropertyCard key={property} property={property} />
              ))
            )}
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/ghar-jagga"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
