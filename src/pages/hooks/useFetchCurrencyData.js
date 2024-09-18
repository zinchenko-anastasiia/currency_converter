import { useEffect, useState } from 'react';
import api from '../../api';
import appConst from '../../constants/appConst';
import findCurrency from '../../utils/findCurrency';

const USD = appConst.USD;
const EUR = appConst.EUR;
const UKR = appConst.UKR;

function calculateCrossRate(rateAtoCommon, rateCommonToB) {
  return rateAtoCommon / rateCommonToB;
}

const useFetchCurrencyData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const result = await api.main.getExchangeRatesFromPrivatBank();

        if (result?.length > 0) {
          setData(
            result?.filter(
              (item) => item.currencyCodeA === USD || item.currencyCodeA === EUR
            )
          );
        }
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTranslations();
  }, []);

  const usdToUah = findCurrency(data, USD, UKR);
  const eurToUah = findCurrency(data, EUR, UKR);

  const rateUSDtoEURBuy = calculateCrossRate(
    usdToUah?.rateBuy,
    eurToUah?.rateSell
  );
  const rateUSDtoEURSell = calculateCrossRate(
    usdToUah?.rateSell,
    eurToUah?.rateBuy
  );

  data?.push({
    currencyCodeA: 840,
    currencyCodeB: 978,
    date: Date.now() / 1000,
    rateBuy: rateUSDtoEURBuy,
    rateSell: rateUSDtoEURSell,
  });

  return [isLoading, data];
};

export default useFetchCurrencyData;
