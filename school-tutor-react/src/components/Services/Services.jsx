import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <section className="services" id='services'>
      <div className="services__all-container">
        <div className="services__header-container">
          <span className="services__header-line"></span>
          <h2 className="services__header">Услуги</h2>
        </div>
        <div className="services__item">
          <h3 className="services__service">
            Консультация психолога для детей и подростков
          </h3>
          <p className="services__price">2000 рублей</p>
        </div>
        <div className="services__item">
          <h3 className="services__service">
            Консультация по вопросам детско-родительских отношений
          </h3>
          <p className="services__price">3000 рублей</p>
        </div>
        <div className="services__length">
          <div className="services__watch-icon"></div>
          <p className="services__duration">Длительность консультации: 1 час</p>
        </div>
      </div>
    </section>
  );
}
