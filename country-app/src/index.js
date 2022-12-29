import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom"
import { ThemeProvider } from "./context/ThemeProvider";
import App from "./App";
import "./index.css";
import { CountryDataProvider } from "./context/CountryDataProvider";

ReactDOM.render(
    <CountryDataProvider>
        <ThemeProvider>
            <Router>
                <App />
            </Router>
    </ThemeProvider>
    </CountryDataProvider>
    ,
    document.getElementById('root')
    )