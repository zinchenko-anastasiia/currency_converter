import { useCallback, useMemo, useState } from 'react';
import appConst from '../../../constants/appConst';
import cleanInputValue from '../utils/cleanInputValue';
import findCurrency from '../../../utils/findCurrency';
import convertToLocalCurrency from '../utils/convertToLocalCurrency';
import convertToForeignCurrency from '../utils/convertToForeignCurrency';

const USD = appConst.USD;
const UKR = appConst.UKR;

const useFormConfig = (data, selectorMenuList) => {
  const [amount, setAmount] = useState(`${UKR}`);
  const [convertedAmount, setConvertedAmount] = useState(`${USD}`);
  const [amountInputValue, setAmountInputValue] = useState('');
  const [convertedAmountInputValue, setConvertedAmountInputValue] =
    useState('');

  const handleAmountSelectChange = useCallback(
    (e) => {
      const newAmountCurrency = e.target.value;
      setAmount(newAmountCurrency);

      if (newAmountCurrency === convertedAmount) {
        const currency = findCurrency(data, newAmountCurrency, amount);

        const updateAmountInput =
          +newAmountCurrency === UKR || +newAmountCurrency === USD
            ? convertToLocalCurrency(amountInputValue, currency.rateSell)
            : convertToForeignCurrency(amountInputValue, currency.rateSell);
        setConvertedAmountInputValue(updateAmountInput);
        setConvertedAmount(amount);
      } else {
        const currency = findCurrency(data, newAmountCurrency, amount);

        const updateAmountInput =
          +newAmountCurrency === UKR
            ? convertToLocalCurrency(amountInputValue, currency.rateSell)
            : convertToForeignCurrency(amountInputValue, currency.rateSell);
        setConvertedAmountInputValue(updateAmountInput);
      }
    },
    [amount, convertedAmount]
  );

  const handleConvertedAmountSelectChange = useCallback(
    (e) => {
      const newConvertedCurrency = e.target.value;
      setConvertedAmount(newConvertedCurrency);

      if (newConvertedCurrency === amount) {
        const currency = findCurrency(
          data,
          newConvertedCurrency,
          convertedAmount
        );

        const updateAmountInput =
          +newConvertedCurrency === UKR || +newConvertedCurrency === USD
            ? convertToLocalCurrency(
              convertedAmountInputValue,
              currency.rateSell
            )
            : convertToForeignCurrency(
              convertedAmountInputValue,
              currency.rateSell
            );
        setAmountInputValue(updateAmountInput);
        setAmount(convertedAmount);
      } else {
        const currency = findCurrency(
          data,
          newConvertedCurrency,
          convertedAmount
        );

        const updateAmountInput =
          +newConvertedCurrency === UKR
            ? convertToLocalCurrency(
              convertedAmountInputValue,
              currency.rateSell
            )
            : convertToForeignCurrency(
              convertedAmountInputValue,
              currency.rateSell
            );
        setAmountInputValue(updateAmountInput);
      }
    },
    [amount, convertedAmount]
  );

  const handleAmountInputChange = useCallback(
    (e) => {
      const cleanValue = cleanInputValue(e.target.value);
      setAmountInputValue(cleanValue);

      const currency = findCurrency(data, convertedAmount, amount);
      setConvertedAmountInputValue(
        convertToLocalCurrency(cleanValue, currency?.rateSell)
      );
    },
    [data, convertedAmount, amount]
  );

  const handleConvertedAmountInputChange = useCallback(
    (e) => {
      const cleanValue = cleanInputValue(e.target.value);
      setConvertedAmountInputValue(cleanValue);

      const currency = findCurrency(data, amount, convertedAmount);
      setAmountInputValue(
        convertToForeignCurrency(cleanValue, currency.rateSell)
      );
    },
    [data, convertedAmount, amount]
  );

  return useMemo(
    () => [
      {
        id: 1,
        title: 'Сума',
        selectValue: amount,
        selectOnChange: handleAmountSelectChange,
        selectMenuList: selectorMenuList,
        inputValue: amountInputValue,
        inputOnChange: handleAmountInputChange,
      },
      {
        id: 2,
        title: 'Конвертована сума',
        selectValue: convertedAmount,
        selectOnChange: handleConvertedAmountSelectChange,
        selectMenuList: selectorMenuList,
        inputValue: convertedAmountInputValue,
        inputOnChange: handleConvertedAmountInputChange,
      },
    ],
    [
      amount,
      convertedAmount,
      selectorMenuList,
      amountInputValue,
      convertedAmountInputValue,
      handleAmountInputChange,
      handleConvertedAmountInputChange,
    ]
  );
};

export default useFormConfig;
