import s from "./CurrencyExchange.module.css";
import swap from "../../images/exchange.png";

import { useState } from "react";

const CurrencyExchange = () => {
  const [firstCurrency, setFirstCurrency] = useState("");
  const [secondCurrency, setSecondCurrency] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "firstCurrency":
        setFirstCurrency(value);
        break;
      case "firstCurrency":
        setSecondCurrency(value);
        break;
      default:
        return;
    }
  };

  return (
    <main className={s.mainContent}>
      <div className={s.container}>
        <form className={s.form}>
          <label>
            <div className={s.currencyAction}>
              <p>Amount</p>
              <p>From</p>
            </div>
            <input
              className={s.inputForm}
              placeholder="1.00"
              name="firstCurrency"
              //   type="number"
              required
            />
            <select name="select" className={s.selectForm} required>
              <option defaultValue="value1">UAH</option>
              <option defaultValue="value2" selected>
                USD
              </option>
              <option value="value3">EUR</option>
            </select>
          </label>
          {/* <p className={s.exchangeText}>Exchange for</p> */}
          <button type="button" className={s.btnSwap}>
            <img src={swap} alt="swap" width="20" height="20" />
          </button>
          <label>
            {/* <input
              className={s.inputForm}
              placeholder="Enter value"
              name="secondCurrency"
              //   type="number"
              required
            /> */}
            <p>To</p>
            <select name="select" className={s.selectForm} required>
              <option value="value1">UAH</option>
              <option value="value2" selected>
                USD
              </option>
              <option value="value3">EUR</option>
            </select>
          </label>
          <button type="submit" className={s.btnSubmitForm}>
            Convert
          </button>
        </form>
        <div className={s.resultDiv}>
          <p>Result: 345</p>
        </div>
      </div>
    </main>
  );
};

export default CurrencyExchange;
