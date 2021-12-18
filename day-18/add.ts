const add = function add(a:  (string | number)[], b:  (string | number)[]): (string | number)[] {
  return ['[', ...a, ',', ...b, ']'];
}

export default add;
