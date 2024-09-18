import findCurrency from '../../../utils/findCurrency';
import updateInputValue from './updateInputValue';

/**
 * обробка зміни валюти в Select та оновлює значення TextField
 *
 * @param {string} newCurrency - нова обрана валюта у Select
 * @param {Function} setValue - функція для оновлення основної валюти
 * @param {string} secondCurrencyValue - друга валюта у Select
 * @param {string} currentInputValue - значення інпуту для поточної валюти
 * @param {string} currentValue - поточна основна валюта у Select
 * @param {Array} currencyData - масив з даними про курси валют
 * @param {Function} setSecondInputValue - функція для оновлення TextField для конвертованої валюти
 * @param {Function} setSecondValue - функція для оновлення конвертованої валюти
 */
const handleCurrencySelectChange = (
  newCurrency,
  setValue,
  secondCurrencyValue,
  currentInputValue,
  currentValue,
  currencyData,
  setSecondInputValue,
  setSecondValue
) => {
  setValue(newCurrency);

  if (newCurrency === secondCurrencyValue) {
    if (currentInputValue?.length > 0) {
      const currency = findCurrency(currencyData, newCurrency, currentValue);
      const updateAmountInput = updateInputValue(
        newCurrency,
        currentValue,
        currency,
        currentInputValue
      );

      setSecondInputValue(updateAmountInput);
    }

    setSecondValue(currentValue);
  } else if (currentInputValue?.length > 0) {
    const currency = findCurrency(currencyData, newCurrency, currentValue);
    const updateAmountInput = updateInputValue(
      newCurrency,
      currentValue,
      currency,
      currentInputValue
    );

    setSecondInputValue(updateAmountInput);
  }
};

export default handleCurrencySelectChange;
