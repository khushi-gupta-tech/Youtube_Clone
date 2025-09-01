import React from "react";

const Shimmer = () => {
  return (
    <div className="mt-4 flex flex-wrap justify-evenly mb-4">
      {Array(12) // 👈 number of shimmer cards
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 w-[320px] h-48 rounded-lg animate-pulse mb-4"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
