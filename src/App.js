import isaac from './isaac.png';
import './App.css';
import { Routes, Route, NavLink as Link } from "react-router-dom"
import React from "react";
import Hobbies from "./Hobbies";


function App() {
    return (
        <div className="App">
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"} activeClassName="active">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={"hobbies"} activeClassName="active">
                            Hobbies
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>

        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="hobbies" element={<Hobbies />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>

        </div>


);
}

export const Home = () => {
    return <div>You are in Home Page</div>

}
export const NotFound = () => {
    return <div>Page Not Found!</div>
}
export default App;
