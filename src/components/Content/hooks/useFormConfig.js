import { useCallback, useMemo, useState } from 'react';
import appConst from '../../../constants/appConst';
import cleanInputValue from '../utils/cleanInputValue';
import handleCurrencySelectChange from '../utils/handleCurrencySelectChange';
import handleCurrencyInputChange from '../utils/handleCurrencyInputChange';

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
      handleCurrencySelectChange(
        newAmountCurrency,
        setAmount,
        convertedAmount,
        amountInputValue,
        amount,
        data,
        setConvertedAmountInputValue,
        setConvertedAmount
      );
    },
    [amount, amountInputValue, convertedAmount, data]
  );

  const handleConvertedAmountSelectChange = useCallback(
    (e) => {
      const newConvertedCurrency = e.target.value;
      handleCurrencySelectChange(
        newConvertedCurrency,
        setConvertedAmount,
        amount,
        convertedAmountInputValue,
        convertedAmount,
        data,
        setAmountInputValue,
        setAmount
      );
    },
    [amount, convertedAmount, convertedAmountInputValue, data]
  );

  const handleAmountInputChange = useCallback(
    (e) => {
      const cleanValue = cleanInputValue(e.target.value);
      handleCurrencyInputChange(
        cleanValue,
        setAmountInputValue,
        data,
        convertedAmount,
        amount,
        setConvertedAmountInputValue
      );
    },
    [data, convertedAmount, amount]
  );

  const handleConvertedAmountInputChange = useCallback(
    (e) => {
      const cleanValue = cleanInputValue(e.target.value);
      handleCurrencyInputChange(
        cleanValue,
        setConvertedAmountInputValue,
        data,
        amount,
        convertedAmount,
        setAmountInputValue
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
      handleAmountSelectChange,
      selectorMenuList,
      amountInputValue,
      handleAmountInputChange,
      convertedAmount,
      handleConvertedAmountSelectChange,
      convertedAmountInputValue,
      handleConvertedAmountInputChange,
    ]
  );
};

export default useFormConfig;
