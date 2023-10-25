// Завдання 1
// Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа.
//  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.

function getPromise(): Promise<string | number> {
  const promise = new Promise<[string, number]>((resolve) => {
    resolve(["Text", 50]);
  });
  return promise.then(([string, number]) => string || number);
}

getPromise().then((data) => {
  console.log(data);
});
