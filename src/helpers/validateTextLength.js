const validateTextLength = (data) => {
  return data.trim().length >= 6;
};

export { validateTextLength };