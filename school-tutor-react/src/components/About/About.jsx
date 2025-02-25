import React from "react";
import "./About.css";
import aboutPhoto from "../../images/about-photo.jpg";

export default function About() {
  return (
    <section className="about" id='about'>
      <div className="about__all-container">
        <div className="about__header-container">
          <h2 className="about__header">Обо мне</h2>
          <span className="about__line"></span>
        </div>
        <div className="about__container">
          <img
            className="about__photo"
            src={aboutPhoto}
            alt="Фото Евгении Юрьевны с книгой в руках"
          />
          <div className="about__info-container">
            <p className="about__paragraph">
              Меня зовут Евгения Юрьевна, я — педагог-психолог высшей
              квалификационной категории, практик, член федерального реестра
              кризисных психологов. 11 лет оказываю помощь семьям по вопросам
              детско-родительских отношений. Непрерывно учусь и повышаю
              квалификацию, изучая инновационные подходы в области психологии,
              прохожу личную терапию и регулярные супервизии. Работаю в
              различных научных подходах, подбирая идеальный терапевтический
              метод именно для вас.
            </p>
            <ul className="about__list">
              <li className="about__list-item">
                Опыт работы с детьми и подростками — 11 лет
              </li>
              <li className="about__list-item">
                Индивидуальный подбор эффективных методов работы для каждого
                конкретного клиента
              </li>
              <li className="about__list-item">
                Возможность проведения ссесий в формате онлайн
              </li>
              <li className="about__list-item">
                Максимально подробная и обратная связь с родителем
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
