// Завдання 4
// Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:

type PageProps = {
  title: string;
};
const page: PageProps = {
  title: "the page",
};

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}
