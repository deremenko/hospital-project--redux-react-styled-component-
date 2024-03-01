const filterValuesInRange= (array, nameField, starValue, endValue) => {
  console.log(array[4], endValue)
  const filteredArray= array.filter(item => (
    (!starValue || item[nameField] >= starValue) &&
    (!endValue || item[nameField] <= endValue)
  ));

  return filteredArray;
} 

export { filterValuesInRange };