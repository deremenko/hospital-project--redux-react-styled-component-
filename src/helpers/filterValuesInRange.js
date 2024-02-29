const filterValuesInRange= (array, nameField, starValue, endValue) => {
  const FilteredArray= array.filter(item => (
    (!starValue || item[nameField] >= starValue) &&
    (!endValue || item[nameField] <= endValue)
  ));

  return FilteredArray;
} 

export { filterValuesInRange };