"use strict";
// Завдання 4
// Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
const page = {
    title: "the page",
};
class Component {
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
//# sourceMappingURL=4.js.map