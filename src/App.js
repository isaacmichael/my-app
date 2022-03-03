
import {Routes, Route, NavLink as Link, Redirect, BrowserRouter, Switch, NavLink, HashRouter} from "react-router-dom"
import React from "react";
import Resume from "./Resume";
import Home from "./Home"
import Modeling from "./Modeling"
import Hobbies from "./Hobbies"

function App() {
    return (
        <div className="App">
            <div>
                <nav>
                    <ul>

                        <li>
                            <NavLink exact to={"/my-app"} activeClassName="active" end>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to={"/my-app/Resume"} activeClassName="active" end>
                                Resume
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to={"/my-app/Modeling"} activeClassName="active" end>
                                3D Modeling
                            </NavLink>
                        </li>
                        <li>
                        </li>
                    </ul>
                </nav>


        </div>


        <div className={"main"}>
            <HashRouter>
                <Routes>
                    <Route exact path="/my-app" element={<Home />}></Route>
                    <Route exact path="my-app/Resume" element={<Resume />}></Route>
                    <Route exact path="my-app/Modeling" element={<Modeling />}></Route>
                </Routes>
            </HashRouter>
        </div>

        </div>


);
}

export default App;


