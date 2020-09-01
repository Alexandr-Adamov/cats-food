import React, { useState } from 'react';
import s from './page.module.css';
import blue from '../images/blue.png';
import red from '../images/red.png';
import grey from '../images/grey.png';
import blueCircle from '../images/blue circle.png';
import redCircle from '../images/red circle.png';
import grayCircle from '../images/gray circle.png';

const Page = () => {
  const [selectedBlue, setSelectedBlue] = useState(false);
  const [selectedRed, setSelectedRed] = useState(false);

  const chengeSelected = (e, method) => {
    if (e === true) {
      method(false);
    } else {
      method(true);
    }
  };

  return (
    <div className={s.background__page}>
      <div className={s.header}><h1>Ты сегодня покормил кота? </h1></div>
      <div className={s.content}>
        <ul className={s.content__list}>
          <li className={s.frame}>
            <div role="presentation" onClick={() => { chengeSelected(selectedBlue, setSelectedBlue); }}>
              {selectedBlue ? <div className={s.selectedIcon} /> : null}
              <div className={s.frame__block}>
                <div className={s.icon__text}>
                  <div className={s.icon__desc}>Сказочное заморское явство</div>
                  <div className={s.icon__title}>Нямушка</div>
                  <div className={s.icon__additive}>с фуа-гра</div>
                  <div className={s.bonus__text}>
                    <div>10 порций</div>
                    <div>мышь в подарок</div>
                  </div>
                </div>
              </div>

              <img alt="" className={s.icon__block} src={blue} />
              <div className={s.circle}>
                <img alt="" src={blueCircle} />
                <div className={s.circle__text}>
                  <div className={s.circle__count}>0,5</div>
                  <div>кг</div>
                </div>
              </div>
              <div className={s.description}>
                <p>
                  Что сидишь? Порадуй кота
                  <span className={s.buy} role="presentation" onClick={() => { chengeSelected(selectedBlue, setSelectedBlue); }}> купи</span>
                </p>
              </div>
            </div>
          </li>
          <li className={s.frame}>
            <div role="presentation" onClick={() => { chengeSelected(selectedRed, setSelectedRed); }}>
              {selectedRed ? <div className={s.selectedIcon} /> : null}
              <div className={s.frame__block}>
                <div className={s.icon__text}>
                  <div className={s.icon__desc}>Сказочное заморское явство</div>
                  <div className={s.icon__title}>Нямушка</div>
                  <div className={s.icon__additive}>с рыбой</div>
                  <div className={s.bonus__text}>
                    <div>40 порций</div>
                    <div>2 мыши в подарок</div>
                  </div>
                </div>
              </div>
              <img alt="" className={s.icon__block} src={red} />
              <div className={s.circle}>
                <img alt="" src={redCircle} />
                <div className={s.circle__text}>
                  <div className={s.circle__count}>2</div>
                  <div>кг</div>
                </div>
              </div>
              <div className={s.description}>
                <p>Головы щуки с чесноком да свежайшая сёмгушка</p>
              </div>
            </div>
          </li>
          <li className={s.frame}>
            <div className={s.frame__block_noActine}>
              <div className={s.icon__text}>
                <div className={s.icon__desc}>Сказочное заморское явство</div>
                <div className={s.icon__title}>Нямушка</div>
                <div className={s.icon__additive}>с курицей</div>
                <div className={s.bonus__text}>
                  <div>100 порций</div>
                  <div>5 мышей в подарок</div>
                  <div>заказчик доволен</div>
                </div>
              </div>
            </div>
            <img alt="" className={s.icon__block} src={grey} />
            <div className={s.circle}>
              <img alt="" src={grayCircle} />
              <div className={s.circle__text}>
                <div className={s.circle__count}>5</div>
                <div>кг</div>
              </div>
            </div>
            <div className={s.description__noActive}><p>Печалькаб с курицей закончился</p></div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Page;
