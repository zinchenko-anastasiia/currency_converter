import truncateNumber from '../../../utils/truncateNumber';

const convertToForeignCurrency = (amount, rateSell) =>
  truncateNumber(parseFloat(amount) * rateSell);

export default convertToForeignCurrency;
