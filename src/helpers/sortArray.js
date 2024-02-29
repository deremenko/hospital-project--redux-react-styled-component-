const sortArray = (arr, fieldName, sortDirection) => {
  let sortedArray = [...arr];
    sortedArray.sort((a, b) => {
      const compareValueA = a[fieldName].toLowerCase();
      const compareValueB = b[fieldName].toLowerCase();

      if (sortDirection === 'По возрастанию' || sortDirection === 'Asc') {
        return compareValueA.localeCompare(compareValueB);
      } 

      return compareValueB.localeCompare(compareValueA);
    });
    return sortedArray
}

export { sortArray };
  
  