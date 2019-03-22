export default (fahrenheit) => {
  const conversion = (fahrenheit - 32) * 5 / 9;

  return `${Math.floor(conversion)}°C`
};
