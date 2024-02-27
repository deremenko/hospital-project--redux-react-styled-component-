const updateObjectArray = (
  array, 
  id, 
  updatedProperties
) => {
  return array.map(obj => {
    if (obj._id === id) {
      return { ...obj, ...updatedProperties };
    }

    return obj;
  });
}

export { updateObjectArray };
