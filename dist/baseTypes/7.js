"use strict";
// Завдання 7
// Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum) і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
var Day;
(function (Day) {
    Day["Monday"] = "\u041F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A";
    Day["Tuesday"] = "\u0412\u0456\u0432\u0442\u043E\u0440\u043E\u043A";
    Day["Wednesday"] = "\u0421\u0435\u0440\u0435\u0434\u0430";
    Day["Thursday"] = "\u0427\u0435\u0442\u0432\u0435\u0440\u0433";
    Day["Friday"] = "\u041F'\u044F\u0442\u043D\u0438\u0446\u044F";
    Day["Saturday"] = "\u0421\u0443\u0431\u043E\u0442\u0430";
    Day["Sunday"] = "\u041D\u0435\u0434\u0456\u043B\u044F";
})(Day || (Day = {}));
const isWeekend = (day) => day === Day.Saturday || day === Day.Sunday;
//# sourceMappingURL=7.js.map