export const generateProductCode = () => {
  let pin: number;
  do {
    pin = Math.floor(Math.random() * 99999999) + 10000000;
  } while (pin > 99999999);

  return pin;
};
