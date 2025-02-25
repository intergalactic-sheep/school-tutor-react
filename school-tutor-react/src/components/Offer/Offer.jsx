import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Offer.css";
import offerPhoto from "../../images/offer-photo.jpg";

export default function Offer() {
  const isMobile = useMediaQuery({ query: `(max-width: 763px)` });

  return (
    <>
      {!isMobile ? (
        <>
          <section className="offer">
            <div className="offer__info-container">
              <h2 className="offer__job">
                Интегративный психолог для детей и подростков
              </h2>
              <h1 className="offer__name">
                Потапова <br /> Евгения Юрьевна
              </h1>
              <p className="offer__about">
                Эффективная интегративная психотерапия для детей и подростков
              </p>
              <a href='#sign-up' className="offer__button">Записаться</a>
            </div>
            <img
              className="offer__photo"
              src={offerPhoto}
              alt="Фотография Евгении Юрьевны, детского психолога"
            />
          </section>
        </>
      ) : (
        <>
          <section className="offer">
            <div className="offer__info-container">
              <h2 className="offer__job">
                Интегративный психолог для детей и подростков
              </h2>
              <h1 className="offer__name">
                Потапова <br /> Евгения Юрьевна
              </h1>
              <img
                className="offer__photo"
                src={offerPhoto}
                alt="Фотография Евгении Юрьевны, детского психолога"
              />
              <p className="offer__about">
                Эффективная интегративная психотерапия для детей и подростков
              </p>
              <a href='#sign-up' className="offer__button">Записаться</a>
            </div>
          </section>
        </>
      )}
    </>
  );
}
