import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Problems.css";

export default function Problems() {
  const isMobile = useMediaQuery({ query: `(max-width: 763px)` });
  const isMedium = useMediaQuery({ query: "(min-width: 764px) and (max-width: 1024px)" });

  const showSingleLineHeader = !isMobile;
  const useTwoBubblesLayout = isMobile || isMedium;

  return (
    <section className="problems" id="problems">
      {showSingleLineHeader ? (
        <div className="problems__header-container">
          <span className="problems__header-line" />
          <h2 className="problems__header">С какими проблемами я работаю?</h2>
        </div>
      ) : (
        <div className="problems__header-container problems__header-container_type_mobile">
          <div className="problems__header-lines">
            <span className="problems__header-first-line">
              <span className="problems__header-line" />С какими
            </span>
            <span className="problems__header-second-line">
              проблемами я работаю?
            </span>
          </div>
        </div>
      )}

      <p className="problems__description">
        Психологические проблемы, лишающие нас счастливой и свободной жизни.
      </p>

      {useTwoBubblesLayout ? (
        <>
          <div className="problems__bubbles-section">
            <div className="problems__bubble-row">
              <div className="problems__bubble">
                <p className="problems__bubble-problem">Агрессия</p>
              </div>
              <div className="problems__bubble">
                <p className="problems__bubble-problem">Коммуникабельность</p>
              </div>
            </div>

            <div className="problems__bubble-row">
              <div className="problems__bubble">
                <p className="problems__bubble-problem">Страхи</p>
              </div>
              <div className="problems__bubble">
                <p className="problems__bubble-problem">Стеснительность</p>
              </div>
            </div>

            <div className="problems__bubble-row">
              <div className="problems__bubble">
                <p className="problems__bubble-problem">
                  Конфликты с&nbsp;родителями
                </p>
              </div>
              <div className="problems__bubble problems__bubble_no-margin">
                <p className="problems__bubble-problem">Самооценка</p>
              </div>
            </div>

            <div className="problems__bubble-row">
              <div className="problems__bubble problems__bubble_no-margin">
                <p className="problems__bubble-problem">Учебные трудности</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="problems__bubbles-section">
            <div className="problems__bubble-row">
              <div className="problems__bubble">
                <p className="problems__bubble-problem">Агрессия</p>
              </div>
              <div className="problems__bubble">
                <p className="problems__bubble-problem">Коммуникабельность</p>
              </div>
              <div className="problems__bubble">
                <p className="problems__bubble-problem">
                  Конфликты с&nbsp;родителями
                </p>
              </div>
              <div className="problems__bubble problems__bubble_no-margin">
                <p className="problems__bubble-problem">Самооценка</p>
              </div>
            </div>
            <div className="problems__bubble-row">
              <div className="problems__bubble">
                <p className="problems__bubble-problem">Страхи</p>
              </div>
              <div className="problems__bubble">
                <p className="problems__bubble-problem">Стеснительность</p>
              </div>
              <div className="problems__bubble problems__bubble_no-margin">
                <p className="problems__bubble-problem">Учебные трудности</p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
