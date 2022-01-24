import React from "react";
import Navbar from "../myreact/test/Component/Navbar";
import Header from "../myreact/test/Component/Header";
import Footer from "../myreact/test/Component/Footer";
import Product from "../myreact/test/Product/Product";

class App extends React.Component {
    render() {
        return (<div>
            <h1>App Component</h1>
            <hr />
            <Navbar />
            <hr />
            <Header />
            <hr />
            <Footer />
            <hr />
            <Product />

        </div>
        )
    }
}
export default App