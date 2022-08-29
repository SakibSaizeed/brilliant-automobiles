import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  //console.log(typeof useParams(id));
  return (
    <div>
      <h1>This is Service Details for{id}</h1>
    </div>
  );
};

export default ServiceDetails;
