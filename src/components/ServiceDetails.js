import React from 'react';
import { useParams } from 'react-router-dom';
import services from "./servicesdata";
import "./css/serviceDetails.css";

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const service = services.find((p) => p.id === serviceId);

    return (
        <div className="service-details-container">
            <div className="service-details-image">
                <img
                    src={service.imageSrc}
                    alt={service.name}
                    style={{ width: '100%' }}
                />
            </div>
            <div className="service-details-description">
                <h2>{service.name}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    )
};

export default ServiceDetails;
