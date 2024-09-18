const truncateNumber = (number, digits = 2) => {
  return number?.toFixed(digits);
};

export default truncateNumber;
