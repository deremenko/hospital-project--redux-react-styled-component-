const validateLatinWithMinDigits = (text) => {
  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9_@.-]{6,}$/;
  return regex.test(text);
};

export { validateLatinWithMinDigits };