const validateTextLength = (length, data) => {
  return data.trim().length >= length;
};

export { validateTextLength };