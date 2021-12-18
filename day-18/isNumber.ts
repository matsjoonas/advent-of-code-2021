const isNumber = function isNumber(char: string | number) {
  return !Number.isNaN(Number(char))
}

export default isNumber;
