// Завдання 1
// Є наступний JavaScript код:

// let age = 50;
// let name = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize;
// let callback = (a) => { return 100 + a };
// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

let age: number = 50;
let userName: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: void;
let callback = (a: number) => {
  return 100 + a;
};
