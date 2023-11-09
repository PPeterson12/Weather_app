function NewTemp(farenheit) {
  const celsius = farenheit - 32;
  return celsius;
}

function createMessage(farenheit, celsius) {
  return (
    "You put in " +
    farenheit +
    " farenheit, " +
    "you get " +
    celsius +
    " celsius."
  );
}

const convertToCelsius = window.prompt("Enter the amount of farenheit");

const convertedCelsius = NewTemp(convertToCelsius);

console.log(createMessage(convertToCelsius, convertedCelsius));
