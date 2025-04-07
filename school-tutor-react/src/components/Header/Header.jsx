import { useMediaQuery } from "react-responsive";
import "./Header.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <>
      {isMobile ? (
        <header className="header">
          <div className="header__name-container">
            <div className="header__feather"></div>
            <p className="header__name">
              Потапова <br /> Евгения Юрьевна
            </p>
          </div>
          <BurgerMenu />
        </header>
      ) : (
        <header className="header">
          <div className="header__name-container">
            <div className="header__feather"></div>
            <p className="header__name">
              Потапова <br /> Евгения Юрьевна
            </p>
          </div>
          <nav className="header__nav">
            <a className="header__nav-link" href="#about">
              Обо мне
            </a>
            <a className="header__nav-link" href="#problems">
              Запросы
            </a>
            <a className="header__nav-link" href="#pipeline">
              Преимущества
            </a>
            <a className="header__nav-link" href="#services">
              Услуги и цены
            </a>
            <a className="header__nav-link" href="#reviews">
              Отзывы
            </a>
          </nav>
          <div className="header__contacts-container">
            <div className="header__contacts">
              <p className="header__contact">+7 921-358-24-37</p>
              <p className="header__contact">Ежедневно с 10:00 до 22:00</p>
            </div>
            <div className="header__socials">
              <a
                href="https://t.me/Evgenia_school"
                target="_blank"
                rel="noopener noreferrer"
                className="header__social-link header__social-link_telegram"
                aria-label="Ссылка на Telegram"
              ></a>
              <a
                href="https://wa.me/+79213582437?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C"
                target="_blank"
                rel="noopener noreferrer"
                className="header__social-link header__social-link_whatsup"
                aria-label="Ссылка на What's App"
              ></a>
            </div>
          </div>
        </header>
      )}
    </>
  );
}
