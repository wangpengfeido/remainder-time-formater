export function fillLeftByZero(str: any, length: number): string {
  str = str.toString();
  while (str.length < length) {
    str = `0${str}`;
  }
  return str
}


