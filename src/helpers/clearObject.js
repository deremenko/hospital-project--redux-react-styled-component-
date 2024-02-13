export const clearObject = (Object) => {
  const emptyObject = [...Object];
  for (const prop in emptyObject) {
    obj[prop] = "";
  }

  return emptyObject;
};