import s from "./Header.module.css";
import EU from "../../images/EU.png";
import USA from "../../images/USA.png";
import { getCurrentCurrency } from "../../api";

import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [currency, setCurrency] = useState("");

  // useEffect(() => {
  //   getCurrentCurrency().then((results) => {
  //     setCurrency(results);
  //   });
  // });

  console.log(currency);

  return (
    <header className={s.header}>
      <div className={s.headerDiv}>
        <p className={s.logo}>CurrencyExchange</p>
        <div className={s.currencyDiv}>
          <ul className={s.currencyNameList}>
            <li className={s.currencyNameListItem}>
              <img src={USA} width="40" height="30" alt="USA-flag" />
            </li>
            <li className={s.currencyNameListItem}>
              <img src={EU} width="40" height="30" alt="EU-flag" />
            </li>
          </ul>
          <div>
            <p className={s.amountText}>Amount</p>
            <ul className={s.amountList}>
              {/* {currency.length !== 0 &&
                currency.map((item) => (
                  <li className={s.amountListItem}>{item.rate}</li>
                ))} */}
            </ul>
          </div>
          <div>
            <p className={s.changeText}>Change</p>
            <ul className={s.changeList}>
              <li className={s.changeListItem}>32.5</li>
              <li className={s.changeListItem}>45.9</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
