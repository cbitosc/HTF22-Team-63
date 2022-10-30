import React from "react";

// components

import CardLineChart2 from "components/Cards/CardLineChart2";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap">
          <div className="w-full xl:w-12/12 px-4">
            <CardLineChart2 />
          </div>
          <div className="w-full xl:w-12/12 px-4">
            <CardLineChart2/>
          </div>
          <p> </p>
          <div className="w-full xl:w-12/12 px-4">
            <CardLineChart2 />
          </div>
          <p> </p>
          <div className="w-full xl:w-12/12 px-4">
            <CardLineChart2/>
          </div>
      </div>
    </>
  );
}
