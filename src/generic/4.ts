// Завдання 4
// Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:

type Interface = {
  title: string;
};

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Interface> {
  pageInfo() {
    console.log(this.props.title);
  }
}
