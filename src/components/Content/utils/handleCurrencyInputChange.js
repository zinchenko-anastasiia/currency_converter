import findCurrency from '../../../utils/findCurrency';
import updateInputValue from './updateInputValue';

/**
 * обробка зміни значення TextField валюти та оновлення відповідних інпутів
 *
 * @param {string} cleanValue - значення інпуту валюти, яке містить лише цифри та крапку у якості розділювача
 * @param {Function} setInputValue - функція для оновлення значення основного TextField валюти
 * @param {Array} currencyData - масив з даними про курси валют.
 * @param {string} currentSelectValue - поточна основна валюта у Select
 * @param {string} secondSelectValue - друга валюта у Select
 * @param {Function} setSecondInputValue - функція для оновлення значення TextField для конвертованої валюти
 */
const handleCurrencyInputChange = (
  cleanValue,
  setInputValue,
  currencyData,
  secondSelectValue,
  currentSelectValue,
  setSecondInputValue
) => {
  setInputValue(cleanValue);

  if (cleanValue?.length > 0) {
    const currency = findCurrency(
      currencyData,
      secondSelectValue,
      currentSelectValue
    );
    setSecondInputValue(
      updateInputValue(
        currentSelectValue,
        secondSelectValue,
        currency,
        cleanValue
      )
    );
  } else {
    setSecondInputValue('');
  }
};

export default handleCurrencyInputChange;
