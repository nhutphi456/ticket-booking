const formatAmount = (amount = 0, decPlaces = 3) => {
  return parseFloat(amount.toFixed(decPlaces))
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export { formatAmount };
