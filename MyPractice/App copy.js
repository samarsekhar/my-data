import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Reader from "./NewTask/PDFReader/Reader";
import Search from "./NewTask/Search/Search";

class App extends Component{
    render() {
        return(
            <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/reader" element={<Reader/>} />
                    <Route path="/search" element={<Search/>} />
                </Routes>
            </Router>
            </>
        )
    }
};
export default  App;