const request = require("axios");

const getPairs = (currency, latestRates) => {
  let obj = {};
  currency.forEach((element) => {
    let value = latestRates[element];
    obj[element] = value;
  });
  return obj;
};

exports.getRates = async (req, res) => {
  try {
    const base = req.query.base;
    const currency = req.query.currency;
  if(!base || !currency }) throw{error:'Invalid base or currency',message:'please provide currency and base'};
    let getExchanges = await request.get(
      `https://api.exchangeratesapi.io/latest?base=${base}`
    );
    let results = {};
    let currentRates;
    if (currency.constructor !== Array) {
      let newCurrency = currency.split(",");
      currentRates = getPairs(newCurrency, getExchanges.data.rates);
      results = {
        base: getExchanges.data.base,
        date: getExchanges.data.date,
        rates: currentRates,
      };
      return res.status(200).json(results);
    }
    currentRates = getPairs(currency, getExchanges.data.rates);
    results = {
      base: getExchanges.data.base,
      date: getExchanges.data.date,
      rates: currentRates,
    };
    return res.status(200).json(results);
  } catch (err) {
    if (err.message) {
      return res.status(err.status || 400).json({error:err,message:err.message});
    } else {
      return res
        .status(err.status || 400)
        .json({ error: err, message: "unable to get latest rates" });
    }
  }
};

