import truncateNumber from '../../../utils/truncateNumber';

const convertToLocalCurrency = (amount, rateSell) =>
  truncateNumber(parseFloat(amount) / rateSell);

export default convertToLocalCurrency;
