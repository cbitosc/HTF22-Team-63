// import React from "react";
import axios from 'axios'
import { useState,useEffect } from 'react';
import PRForm from "components/Cards/PRForm";

export default function MapExample() {
  
  let [error,setError]=useState('')
  let i=1
  let [customer_satellites, setCustomersatellites] = useState([])
  useEffect(() => {
      axios.get("https://isro.vercel.app/api/customer_satellites")
          .then(response => {setCustomersatellites(response.data.customer_satellites)})
          .catch(err => setError(err.message))
  }, [])
console.log("Iss details are:",customer_satellites)
  return (
    <>
    <div>
            <h1 className='planet'>List of Customer Satellites</h1>....
            {/* <p className='text-center'>Number of Astronauts are 10</p> */}
            <div className='container'>
            {error !== '' && <p className='h1 text-danger'>{error}</p>}

            {customer_satellites.length == 0 && <p className='display-1 text-danger'>No data</p>}

            {customer_satellites.length !== 0 &&
                <table className="table text-center w-5">
                    <thead className='border-dark bg-dark text-light'>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>COUNTRY</th>
                            <th>LAUNCH DATE</th>
                            <th>MASS</th>
                            <th>LAUNCHER</th>
                        </tr>
                    </thead>

                    
                    <tbody>
                        {
                            customer_satellites.map((astronautObj) => (<tr key={astronautObj.id}>
                                <td className='bg-light border-dark'>{i++}</td>
                                <td className='bg-light border-dark'>{astronautObj.id}</td>
                                <td className='bg-light border-dark'>{astronautObj.country}</td>
                                <td className='bg-light border-dark'>{astronautObj.launch_date}</td>
                                <td className='bg-light border-dark'>{astronautObj.mass}</td>
                                <td className='bg-light border-dark'>{astronautObj.launcher}</td>
                            </tr>))
                        }
                    </tbody>
                    
                </table>
            }
            </div>
        </div>

    </>
  );
}