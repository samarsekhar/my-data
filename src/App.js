import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import PostForm from "./PostForm/PostForm";
import PostList from "./PostForm/PostList";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/postform" element={<PostForm />} />
                    <Route path="/postlist" element={<PostList />} />
                </Routes>
            </Router>
        </>
    );
};
export default App;