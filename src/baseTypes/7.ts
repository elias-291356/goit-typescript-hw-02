// Завдання 7
// Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum) і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

enum Day {
  Monday = "Понеділок",
  Tuesday = "Вівторок",
  Wednesday = "Середа",
  Thursday = "Четверг",
  Friday = "П'ятниця",
  Saturday = "Субота",
  Sunday = "Неділя",
}

const isWeekend = (day: Day): boolean =>
  day === Day.Saturday || day === Day.Sunday;
