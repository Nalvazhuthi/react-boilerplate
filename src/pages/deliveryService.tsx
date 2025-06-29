import React from 'react';
import chooseCoffee from "../assets/image/services/chooseCoffee.png";
import delivery from "../assets/image/services/delivery.png";
import enjoyCoffee from "../assets/image/services/enjoyCoffee.png";

const DeliveryService = () => {
    const services = [
        {
            image: chooseCoffee,
            service: "Choose your coffee",
            description: "There are 20+ coffees for you"
        },
        {
            image: delivery,
            service: "We deliver it to you",
            description: "Choose delivery service"
        },
        {
            image: enjoyCoffee,
            service: "Enjoy your coffee",
            description: "Relax and enjoy your fresh coffee"
        },
    ];

    return (
        <section className='delivery-service-page'>
            <div className="section-header">
                How to use delivery <span className="highlight">service</span>
            </div>

            <div className="delivery-services">
                {services.map((service, index) => (
                    <div className="service-wrapper" key={index}>
                        <img src={service.image} alt={service.service} />
                        <div className="service-title">{service.service}</div>
                        <div className="service-description">{service.description}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DeliveryService;
