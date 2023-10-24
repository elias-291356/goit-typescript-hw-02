// Завдання 5
// Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення.
// Використовуйте generics, щоб цей інтерфейс міг працювати з будь - якими типами ключів та значень.

type KeyValue<K, V> = {
  key: K;
  value: V;
};

const something: KeyValue<string, number> = {
  key: "age",
  value: 100,
};
