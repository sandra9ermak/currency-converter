import axios from "axios";

axios.defaults.baseURL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/";

export const getCurrentCurrency = () => {
  return axios
    .get(`exchangenew?json`)
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};
