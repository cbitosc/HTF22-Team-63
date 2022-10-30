import React from "react";
import Chart from "chart.js";

export default function CardBarChart() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                {/* Overview */}
              </h6>
              <h2 className="text-blueGray-700 text-l font-bold">Dr.Ramesh Kumar</h2>
              <h3 className="text-blueGray-700 fs-5 font-semibold">M.B.B.S., M.D. (Dermatology)</h3>
              <p> </p>
              <h3 className="text-blueGray-700 fs-6 font-semibold">Dermatologist (Skin Doctor) at Dr. Chaudhary Hospital & Medical Research Centre in Udaipur.</h3>
            </div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdlc1r7b-uo94Z4EbjvSZY5wbV-5yuarwHw&usqp=CAU'width={180} height={20} alt='Large Pizza'></img>
            </div>
            <button
                  className="bg-success text-white active:bg-success text-xs font-bold uppercase px-4 py-2  rounded shadow hover:shadow-lg outline-none focus:outline-none m-3 ease-linear transition-all duration-150"
                  type="button"
                >
                   Get Appointment
                </button>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart
          <div className="relative h-350-px">
            <canvas id="line-chart"></canvas>
          </div> */}
        </div>
      </div>
    </>
  );
}