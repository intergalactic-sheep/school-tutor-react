import React from "react";
import "./Pipeline.css";

export default function Pipeline() {
  return (
    <section className="pipeline" id='pipeline'>
      <div className="pipeline__all-container">
        <div className="pipeline__header-container">
          <h2 className="pipeline__header">Как я работаю?</h2>
          <span className="pipeline__header-line" />
        </div>
        <div className="pipeline__container">
          <div className="pipeline__container-item">
            <div className="pipeline__bubble">01</div>
            <div className="pipeline__item-info">
              <h3 className="pipeline__stage">Обращение ко мне</h3>
              <p className="pipeline__description">
                Вы оставляете заявку и в ближайшее время я связываюсь с вами для
                дальнейшего обсуждения
              </p>
            </div>
          </div>
          <div className="pipeline__container-item">
            <div className="pipeline__bubble">02</div>
            <div className="pipeline__item-info">
              <h3 className="pipeline__stage">
                Подбор даты и времени для встречи
              </h3>
              <p className="pipeline__description">
                Подбираем удобную для Вас дату и время встречи и обговариваем
                формат встречи (очно или онлайн)
              </p>
            </div>
          </div>
          <div className="pipeline__container-item">
            <div className="pipeline__bubble">03</div>
            <div className="pipeline__item-info">
              <h3 className="pipeline__stage">Бесплатная сессия</h3>
              <p className="pipeline__description">
                Знакомимся, выявляем проблему и формируем запрос для терапии
              </p>
            </div>
          </div>
          <div className="pipeline__container-item">
            <div className="pipeline__bubble">04</div>
            <div className="pipeline__item-info">
              <h3 className="pipeline__stage">Дальнейшие сессии</h3>
              <p className="pipeline__description">
                Проведение 5-10 сессий для решения конкретного запроса
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
