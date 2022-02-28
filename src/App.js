import isaac from './isaac.png';
import './App.css';
import { Routes, Route, NavLink as Link } from "react-router-dom"
import React from "react";
import Resume from "./Resume";


function App() {
    return (
        <div className="App">
            <div>
                <nav>
                    <ul>

                        <li>
                            <Link to={"/"} activeClassName="active" end>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={"Resume"} activeClassName="active" end>
                                Resume
                            </Link>
                        </li>
                    </ul>
                </nav>
        </div>

        <div className={"main"}>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="Resume" element={<Resume />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>

        </div>


);
}

export const Home = () => {
    return <h2>Home</h2>

}
export const NotFound = () => {
    return <div>Page Not Found!</div>
}
export default App;
