const temperatureInCelsius = prompt("Введите температуру в градусах Цельсия");
console.log(typeof temperatureInCelsius);
if (temperatureInCelsius === 0) {
  alert("0 градусов по Цельсию - это температура замерзания воды");
} else if (temperatureInCelsius > 0) {
  alert(
    "Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже"
  );
} else if (temperatureInCelsius < 0) {
  alert("Нужная температура для замерзания!");
}

const temperatureInFahrenheit = (Number(temperatureInCelsius) * 9) / 5 + 32;
console.log(typeof temperatureInFahrenheit);
// console.log(typeof temperatureInCelsius); не понял, почему всё равно стринг вернуло
alert(
  `${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`
);
