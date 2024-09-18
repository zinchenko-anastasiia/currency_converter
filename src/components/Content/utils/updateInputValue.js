import appConst from '../../../constants/appConst';
import convertToForeignCurrency from './convertToForeignCurrency';
import convertToLocalCurrency from './convertToLocalCurrency';

const USD = appConst.USD;
const EUR = appConst.EUR;
const UKR = appConst.UKR;

const updateInputValue = (newCurrency, prevCurrency, currency, inputValue) => {
  if (!currency) return 0;

  if (+newCurrency === UKR) {
    return convertToLocalCurrency(inputValue, currency.rateSell);
  }

  if (+prevCurrency === UKR) {
    return convertToForeignCurrency(inputValue, currency.rateSell);
  }

  return +prevCurrency === EUR && +newCurrency === USD
    ? convertToForeignCurrency(inputValue, currency.rateSell)
    : convertToLocalCurrency(inputValue, currency.rateSell);
};

export default updateInputValue;
