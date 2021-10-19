import React from 'react';
import useDoctors from '../../Custom-Hook1/useDoctors'
const Doctors = () => {
  const [doctors, setDoctors] = useDoctors([]);
    return (
        <div className="container mx-auto row row-cols-1 row-cols-md-2 g-4 mb-3 m-5  p-5 ">
        {
            doctors.map(doctor=> 
                <div className="col">
                <div className="card h-100 bg-info bg-opacity-10">
                  <img  src={doctor.img} className=" p-4 card-img-top w-50 mx-auto" alt="..."/>
                  <div className="card-body">
                    <h3 className="card-title"> {doctor.name}</h3>
                    <h4 className="card-text"> Degree:{doctor.degree}</h4>
                    <h5 className="card-text"> specialist:{doctor.specialist}</h5>
                    <h6 className="card-text"> chember:{doctor.chember}</h6>
                  </div>
                </div>
              </div>)
        }

    </div>
    );
};

export default Doctors;