"use strict";
// Завдання 1
// Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа.
//  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
function getPromise() {
    const promise = new Promise((resolve) => {
        resolve(["Text", 50]);
    });
    return promise;
}
getPromise().then((data) => {
    console.log(data);
});
//# sourceMappingURL=1.js.map