// Завдання 2
// JavaScript змінна може зберігати значення будь-якого типу:

// let anything = -20;
// anything = 'Text';
// anything = {};
// Який тип ви надаєте змінній anything в TypeScript, щоб зберегти її гнучкість?

let anything: number | string | {};

anything = -20;
anything = "Text";
anything = {};
