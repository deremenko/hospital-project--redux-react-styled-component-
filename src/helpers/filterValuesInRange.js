const filterValuesInRange= (array, nameField, starValue, endValue) => {
  const filteredArray= array.filter(item => (
    (!starValue || item[nameField] >= starValue) &&
    (!endValue || item[nameField] <= endValue)
  ));

  return filteredArray;
} 

export { filterValuesInRange };