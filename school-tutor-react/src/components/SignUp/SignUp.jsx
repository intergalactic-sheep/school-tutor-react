import React from "react";
import "./SignUp.css";

export default function Footer() {
  return (
    <section className="sign-up" id="sign-up">
      <div className="sign-up__header-container">
        <span className="sign-up__header-line" />
        <h2 className="sign-up__header">Запись на бесплатное занятие</h2>
      </div>
      <div className="sign-up__box">
        <h3 className="sign-up__box-title">
          Запишитесь на бесплатную консультацию
        </h3>
        <ul className="sign-up__box-list">
          <li className="sign-up__box-item">
            <a
              className="sign-up__link"
              href="https://t.me/Evgenia_school"
              target="_blank"
              rel="noopener noreferrer"
            >
              TELEGRAM
            </a>
          </li>
          <li className="sign-up__box-item">
            <a
              className="sign-up__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/+79213582437?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C"
            >
              WHATSAPP
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
