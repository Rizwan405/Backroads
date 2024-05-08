import React from "react";
import Title from "./Title";
import { services } from "../data";
function Services() {
  return (
    <section className="section services" id="services">
      <Title subtitle="services" title="our" />
      <div className="section-center services-center">
        {services.map((service) => {
          return (
            <article className="service" key={service.id}>
              <span className="service-icon">
                <i className={service.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{service.title}</h4>
                <p className="service-text">{service.subtitle}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
