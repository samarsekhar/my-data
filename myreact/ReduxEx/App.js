import Message from "./Message/Message";
import { store } from "./redux/store";
import { Provider } from "react-redux";

let App = () => {
    return (
        <>
            <Provider store={store}>
                <h1> App Component</h1>
                <hr />
                <Message />
            </Provider>
        </>
    )
};
export default App;