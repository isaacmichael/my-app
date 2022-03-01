
import { Routes, Route, NavLink as Link } from "react-router-dom"
import React from "react";
import Resume from "./Resume";
import Home from "./Home"


function App() {
    return (
        <div className="App">
            <div>
                <nav>
                    <ul>

                        <li>
                            <Link to={"Home"} activeClassName="active" end>
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
                <Route path="Home" element={<Home />}></Route>
                <Route path="Resume" element={<Resume />}></Route>
            </Routes>
        </div>

        </div>


);
}

export default App;


