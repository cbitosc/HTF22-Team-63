/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
            {/* <marquee style={{ color: 'red', fontSize: '3em' }}>Test</marquee> */}
            <marquee
    behavior='scroll'
    scrollamount='10'
    width='125%'
    direction='left'
    height='50px'
 >
  The Presence of the Doctor is the beginning of the cure.
    {/* <img src='https://thumbs.dreamstime.com/b/rocket-15662504.jpg'width={100} height={30} alt='Large Pizza' /> */}
</marquee>
              <h2 className="font-semibold text-4xl text-blueGray-600">
              ABOUT US ?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              This is a platform where users can register as patients
              or doctors. Patients can interact with the portal to access their medical data, previous
              history, and scheduled appointments and doctors can view patients data and accept
              pending appointments.
              </p>
              <div className="mt-12">
                <a
                  href="https://en.wikipedia.org/wiki/Health_care"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  More about health care
                </a>

              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-30 b-auto right-0 pt-5 sm:w-6/12 -mt-10 sm:mt-0 w-10/12 max-h-860px"
          src="https://media.istockphoto.com/photos/medical-tech-science-innovative-iot-global-healthcare-ai-technology-picture-id1298626492?b=1&k=20&m=1298626492&s=170667a&w=0&h=gKFiFmLzM-jXK3IGgRHoBoP7dlRK1AecT8w1ivLGBSU="/>
      </section>

      

      

      

      
      {/* <Footer /> */}
    </>
  );
}
