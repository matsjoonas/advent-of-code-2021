const tryToGetNumber = function tryToGetNumber(char: string | number) {
  const cast = Number(char);
  if (Number.isNaN(cast)) {
    return false;
  }
  return cast;
}

export default tryToGetNumber;
