import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import Feetback from "./Feetback";

const Home = () => {
const {serviceData,happyData} =  useLoaderData()


  return (
    <div className="w-[80%] mx-auto mt-4">
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link className="btn btn-primary" to="/treatments">Show all</Link>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-4  gap-8 mt-4">
        {   
          serviceData.slice(0,4).map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)  
        }
      </div>
      
      <div className="grid grid-cols-4 gap-8 mt-4">
        {
            happyData.map(h => <Feetback feed={h}></Feetback>)
        }
      </div>
    </div>
  );
};

export default Home;
