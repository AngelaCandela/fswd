import { BrowserRouter, Route, NavLink } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

export default function Router() {
    return (
        <div className="container">
            <BrowserRouter>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>

                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </BrowserRouter>            
        </div>
    )
}
