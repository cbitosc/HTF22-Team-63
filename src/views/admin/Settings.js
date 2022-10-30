import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import MapExample from "../../components/Maps/MapExample";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
          <div className="w-full xl:w-12/12 px-4">
            <CardBarChart />
          </div>
          <div className="w-full xl:w-12/12 px-4">
            <CardBarChart />
          </div>
          <p> </p>
          <div className="w-full xl:w-12/12 px-4">
            <CardBarChart />
          </div>
          <p> </p>
          <div className="w-full xl:w-12/12 px-4">
            <CardBarChart />
          </div>
      </div>
    </>
  );
}
