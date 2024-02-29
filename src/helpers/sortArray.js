const sortArray = (arr, fieldName, sortDirection) => {
  let sortedArray = [...arr];
  if (sortedArray.length !== 0) {
    sortedArray.sort((a, b) => {
      const compareValueA = a[fieldName];
      const compareValueB = b[fieldName];

      if (sortDirection === 'По возрастанию' || sortDirection === 'Asc') {
        return compareValueA.localeCompare(compareValueB);
      } else {
        return compareValueB.localeCompare(compareValueA);
      }
    });
    return sortedArray
  }
}

export { sortArray };
  
  