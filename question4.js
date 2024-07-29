let numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
  numbers[i] = numbers[i] ** 3;
  sum += numbers[i];
  //   console.log(typeof numbers, numbers);
  //   console.log(typeof sum, sum);
}
console.log(sum); // 1158411

// Через цикл for of
sum = 0;
for (let num of numbers) {
  numbers = num ** 3;
  //   console.log("num", num);
  sum += num;
  //   console.log(typeof num, num);
  //   console.log(typeof sum, sum);
}
console.log(sum); // 1003904306910622800
