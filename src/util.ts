export function fillLeftByZero(str, length) {
  while (str.length < length) {
    str = `0${str}`;
  }
  return str
}


