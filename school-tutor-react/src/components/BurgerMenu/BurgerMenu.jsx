import { useState, useEffect } from "react";
import "./BurgerMenu.css";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    return () => {
      body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`burger-menu__overlay ${
          isOpen ? "burger-menu__overlay_type_opened" : ""
        }`}
      ></div>
      <div className="burger-menu">
        <button
          className={`burger-menu__toggle ${
            isOpen ? "burger-menu__toggle_type_open" : ""
          }`}
          onClick={toggleMenu}
        >
          <span className="burger-menu__bar"></span>
          <span className="burger-menu__bar"></span>
          <span className="burger-menu__bar"></span>
        </button>
        <nav
          className={`burger-menu__nav ${
            isOpen ? "burger-menu__nav_type_open" : ""
          }`}
        >
          <ul className="burger-menu__list">
            <li className="burger-menu__item">
              <a href="#about" onClick={toggleMenu}>
                Обо мне
              </a>
            </li>
            <li className="burger-menu__item">
              <a href="#problems" onClick={toggleMenu}>
                Запросы
              </a>
            </li>{" "}
            <li className="burger-menu__item">
              <a href="#pipeline" onClick={toggleMenu}>
                Преимущества
              </a>
            </li>{" "}
            <li className="burger-menu__item">
              <a href="#services" onClick={toggleMenu}>
                Услуги и цены
              </a>
            </li>{" "}
            <li className="burger-menu__item">
              <a href="#reviews" onClick={toggleMenu}>
                Отзывы
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
