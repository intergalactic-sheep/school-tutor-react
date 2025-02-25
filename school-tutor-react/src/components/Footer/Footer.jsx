import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <p className="footer__name">Потапова Евгения Юрьевна</p>
      <div className="footer__section-number">
        <div className="footer__phone-icon"></div>
        <p className="footer__number">+7 921-358-24-37</p>
      </div>
      <p className="footer__city">Санкт-Петербург — 2024 год</p>
      <div className="footer__section-email">
        <div className="footer__email-icon"></div>
        <p className="footer__email">teacher-psychologist@mail.ru</p>
      </div>
    </section>
  );
}
