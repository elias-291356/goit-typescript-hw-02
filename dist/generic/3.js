"use strict";
// Завдання 3
// У вас є функція merge, яка поєднує два об'єкти. Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const merged = merge({ name: "Alisa" }, { age: 28 });
//# sourceMappingURL=3.js.map