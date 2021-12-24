const tryConvertToNumber = function tryConvertToNumber(char: string) {
  const cast = Number(char);
  if (Number.isNaN(cast)) {
    return char;
  }
  return cast;
}

export default tryConvertToNumber;
