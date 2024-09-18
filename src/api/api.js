import { client } from './fetchClient';

const api = {
  main: {
    getExchangeRatesFromPrivatBank: () =>
      client.get('https://api.monobank.ua/bank/currency'),
  },
};

export default api;
