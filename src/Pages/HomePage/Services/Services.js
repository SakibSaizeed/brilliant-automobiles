import React from "react";
import SingleService from "./SingleService/SingleService";
import { useState, useEffect } from "react";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="row">
      <h1 className="text-primary text-center mt-5"> Our Services</h1>
      <div className="services-container text-center">
        {services.map((service) => (
          <SingleService service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
