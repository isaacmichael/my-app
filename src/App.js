
import {Routes, Route, NavLink as Link, Redirect, BrowserRouter, Switch, NavLink} from "react-router-dom"
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
                            <NavLink exact to={"/"} activeClassName="active" end>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to={"Resume"} activeClassName="active" end>
                                Resume
                            </NavLink>
                        </li>
                    </ul>
                </nav>


        </div>


        <div className={"main"}>

            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/Resume" element={<Resume />}></Route>
            </Routes>
        </div>

        </div>


);
}

export default App;


