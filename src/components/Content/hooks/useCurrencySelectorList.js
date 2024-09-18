import { useMemo } from 'react';
import appConst from '../../../constants/appConst';

const USD = appConst.USD;
const EUR = appConst.EUR;
const UKR = appConst.UKR;

const useCurrencySelectorList = () => {
  return useMemo(
    () => [
      { id: 1, text: 'UKR', value: `${UKR}` },
      { id: 2, text: 'USD', value: `${USD}` },
      { id: 3, text: 'EUR', value: `${EUR}` },
    ],
    []
  );
};

export default useCurrencySelectorList;
