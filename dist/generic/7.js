// Завдання 7
// У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
//  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
export var UserRole;
(function (UserRole) {
    UserRole["admin"] = "admin";
    UserRole["editor"] = "editor";
    UserRole["guest"] = "guest";
})(UserRole || (UserRole = {}));
const userRoleStatuses = {
    [UserRole.admin]: true,
    [UserRole.editor]: false,
    [UserRole.guest]: false,
};
//# sourceMappingURL=7.js.map