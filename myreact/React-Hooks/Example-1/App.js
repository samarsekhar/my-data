import Counter from "./Counter/Counter";
import Message from "../myreact/React-Hooks/Example-1/Message/Message";
import TodoList from "./TodoList/TodoList";
let App = () => {
    return <div>
        <h1>App Component</h1>
        <hr />
        <Message />
        <hr />
        <Counter />
    </div>
};
export default App;