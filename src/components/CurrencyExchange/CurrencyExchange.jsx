import s from "./CurrencyExchange.module.css";
import swap from "../../images/right-arrow.png";
import { getCurrentCurrency } from "../../api";

import { useState } from "react";
import { useEffect } from "react";

const CurrencyExchange = () => {
  const [firstCurrency, setFirstCurrency] = useState("");
  const [secondCurrency, setSecondCurrency] = useState("");
  const [resultFrom, setResultFrom] = useState("");
  const [resultTo, setResultTo] = useState("");
  const [usdBuy, setUsdBuy] = useState("");
  const [eurBuy, setEurBuy] = useState("");
  const [usdSale, setUsdSale] = useState("");
  const [eurSale, setEurSale] = useState("");

  useEffect(() => {
    getCurrentCurrency().then((results) => {
      results.filter((el) => {
        if (el.ccy === "USD") {
          setUsdBuy(el.buy);
          setUsdSale(el.sale);
        }
        if (el.ccy === "EUR") {
          setEurBuy(el.buy);
          setEurSale(el.sale);
        }
      });
    });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstCurrency":
        setFirstCurrency(value);
        break;
      case "secondCurrency":
        setSecondCurrency(value);
        break;
      default:
        return;
    }
  };

  const changes = () => {
    if (firstCurrency === firstCurrency) {
    }
  };

  const formSubmit = (event) => {
    event.preventDefault();
    // setSecondCurrency("");
    // if (resultFrom === "USD" || resultTo === "EUR") {
    //   usdEur();
    // } else if (resultFrom === "EUR" || resultTo === "USD") {
    //   eurUsd();
    // }
    if (firstCurrency || resultFrom === "USD" || resultTo === "UAH") {
      usdUah();
    } else if (firstCurrency || resultFrom === "EUR" || resultTo === "UAH") {
      eurUah();
    } else if (firstCurrency || resultFrom === "UAH" || resultTo === "USD") {
      uahUsd();
    } else if (firstCurrency || resultFrom === "UAH" || resultTo === "EUR") {
      uahEur();
    }
  };

  const usdUah = () => {
    const resultUsdUah = firstCurrency * usdBuy;
    setSecondCurrency(resultUsdUah);
    console.log("usdBuy", usdBuy);
  };
  const eurUah = () => {
    const resultEurUah = firstCurrency * eurBuy;
    setSecondCurrency(resultEurUah);
  };
  const usdEur = () => {
    const resultUsdEur = firstCurrency * (usdSale / eurSale);
    setSecondCurrency(resultUsdEur);
  };
  const eurUsd = () => {
    const resultEurUsd = firstCurrency * (eurSale / usdSale);
    setSecondCurrency(resultEurUsd);
  };
  const uahUsd = () => {
    const resultUahUsd = firstCurrency / usdSale;
    setSecondCurrency(resultUahUsd);
  };
  const uahEur = () => {
    const resultUahEur = firstCurrency / eurSale;
    setSecondCurrency(resultUahEur);
  };

  const currencyFrom = (event) => {
    console.log("event", event.currentTarget.value);
    const value = event.currentTarget.value;
    if (value === "UAH") {
      setResultFrom(value);
    } else if (value === "EUR") {
      setResultFrom(value);
    } else if (value === "USD") {
      setResultFrom(value);
    }
  };

  const currencyTo = (e) => {
    console.log("e", e.currentTarget.value);
    const value = e.currentTarget.value;
    if (value === "UAH") {
      setResultTo(value);
    } else if (value === "EUR") {
      setResultTo(value);
    } else if (value === "USD") {
      setResultTo(value);
    }
  };

  return (
    <main className={s.mainContent}>
      <div className={s.container}>
        <form className={s.form} onSubmit={formSubmit}>
          <label>
            <div className={s.currencyAction}>
              <p>Amount</p>
              <p>From</p>
            </div>
            <input
              className={s.inputForm}
              placeholder="1.00"
              name="firstCurrency"
              value={firstCurrency}
              onChange={handleInputChange}
              //   type="number"
              required
            />
            <select
              name="select"
              className={s.selectForm}
              onChange={currencyFrom}
              required
            >
              <option name="UAH" value="UAH">
                UAH
              </option>
              {/* <option name="USD" value={USD}> */}
              <option name="USD" value="USD">
                USD
              </option>
              <option name="EUR" value="EUR">
                EUR
              </option>
            </select>
          </label>
          {/* <p className={s.exchangeText}>Exchange for</p> */}
          <span className={s.spanArrow}>
            <img src={swap} alt="swap" width="20" height="20" />
          </span>
          <label className={s.secondLabel}>
            <div className={s.secondInput}>
              <p className={s.secondInputText}>To</p>
              <input
                className={s.inputForm}
                placeholder="1.00"
                name="secondCurrency"
                value={secondCurrency}
                onChange={handleInputChange}
                //   type="number"
              />
            </div>
            <select
              name="select"
              className={s.secondSelect}
              onChange={currencyTo}
              required
            >
              <option name="UAH" value="UAH">
                UAH
              </option>
              <option name="USD" value="USD">
                USD
              </option>
              <option name="EUR" value="EUR">
                EUR
              </option>
            </select>
          </label>
          <button type="submit" className={s.btnSubmitForm}>
            Convert
          </button>
        </form>
      </div>
    </main>
  );
};

export default CurrencyExchange;
