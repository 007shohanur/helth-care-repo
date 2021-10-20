import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import useServices from '../../Custom-Hook2/useServices';
const Services = () => {
    const [services, setServices] = useServices([]);
    return (
        <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4 mb-3 mt-3">
        {
            services.map(service=> 
                <div className="col">
                <div className="card h-100 bg-info bg-opacity-10">
                  <img  src={service.img} className=" p-4 card-img-top w-50 mx-auto" alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Macine Name: {service.name}</h4>
                    <p className="card-text"> Details:{service.detail}</p>
                    <h6>Test-Fees: {service.testCost}</h6>
                   
                  </div>
                  <div className="p-3">
                 <Link to ="/details" >
                   <Button varient="primary" >Show Details</Button>
                 </Link>
                  </div>
                </div>
              </div>)
        }

    </div>
    );
};

export default Services;