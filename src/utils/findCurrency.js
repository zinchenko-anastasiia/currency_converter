const findCurrency = (currencyData, codeA, codeB) => {
  let rate = currencyData?.find(
    ({ currencyCodeA, currencyCodeB }) =>
      currencyCodeA === +codeA && currencyCodeB === +codeB
  );

  console.log(rate);

  if (!rate) {
    rate = currencyData?.find(
      ({ currencyCodeA, currencyCodeB }) =>
        currencyCodeA === +codeB && currencyCodeB === +codeA
    );
  }

  return rate || null;
};

export default findCurrency;
