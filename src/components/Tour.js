import React from "react";
import Title from "./Title";
import { tours } from "../data";
function Tour() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />
      {/* <Title subtitle="tours" title="featured" /> */}
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return (
            <article key={tour.id} className="tour-card">
              <div className="tour-img-container">
                <img src={tour.image} className="tour-img" alt="" />
                <p className="tour-date">{tour.date}</p>
              </div>
              <div className="tour-info">
                <h4>{tour.title}</h4>
                <p>{tour.description}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className={tour.icon}></i>
                    </span>{" "}
                    {tour.location}
                  </p>
                  <p>{tour.duration}</p>
                  <p>{tour.price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Tour;
