import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import PRForm from "components/Cards/PRForm";

// components


import CardVehicle from "components/Cards/CardVehicle.js";
import { reverse } from "d3";
import { right } from "@popperjs/core";

export default function Maps() {
  return (
    <> <br></br>
    <marquee
    behavior='scroll'
    scrollamount='20'
    width='125%'
    direction='left'
    height='50px'
 >
  <div className="flex flex-wrap">
    { <img src='https://www.ambipalm.com/images/amb/bls.png' width={100} height={30} alt='Large Pizza'  /> }
    <h4 className="pt-3">You call, we haul</h4>
    </div>
</marquee><br></br> <br></br>
      <Carousel className="relative bg-lightBlue-600 ml-0 mr-0">
            
      <Carousel.Item>
      <div className="flex flex-wrap">
      <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
        <img
          className="d-block w-65"
          src="https://www.ambipalm.com/images/amb/als.png"
          alt="First slide"
        />
        </div>
        <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
        <div className=" mt-10 mr-0">
          <h3 className="">Advanced Life Support</h3>
          <p className="">
                                                                A Large vehicle, Advanced Life Support is used for
                                                                critical patients. The Ambulance consists of an array of
                                                                ICU equipment. It has an in-built ventilator with oxygen
                                                                cylinder, BP monitor, and specialized medication
                                                                required.
          </p>
        </div>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flex flex-wrap">
      <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
      <img
          className="d-block w-65"
          src="https://www.ambipalm.com/images/amb/bls.png"
          alt="Second slide"
          width={500}
        />
        </div>
        <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
        <div className=" mt-10 mr-0">
          <h3>Basic Life Support</h3>
          <p>
                                                                Basic Life support is a large van with important and
                                                                basic medical equipment. However, is not for critical
                                                                patients and long durations.
          </p>
        </div>
        </div>
      </div>
        

        
      </Carousel.Item>
      <Carousel.Item>
      <div className="flex flex-wrap">
      <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
        <img
          className="d-block w-65"
          src="https://www.ambipalm.com/images/amb/ptv.png"
          alt="Third slide"
          width={500}
        />
        </div>
        <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
        <div className=" mt-10 mr-0">
          <h3>Patient Transport Servies</h3>
          <p>
                                                                    The Patient Transport Service Vehicle is used to
                                                                    transfer non-critical patients from one place to
                                                                    another It is equipped with a stretcher as well.
                                                                
          </p>
        </div>
        </div>
        </div>
      </Carousel.Item>
    </Carousel>
          <br></br>
          <div className="w-full xl:w-12/12 px-4">
            <CardVehicle/>
          </div>
          <br></br>
          <div className="w-full xl:w-12/12 px-4">
            <CardVehicle/>
          </div>
          {/* <div className="w-full xl:w-12/12 px-4">
            <PRForm/>
          </div> */}

      </>   
  );
}
