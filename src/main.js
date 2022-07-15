import "./lib/scss/style.scss"
import ListProvider from "./lib/js/03-ListProvider";
import React from "react";
import ReactDOM from "react-dom";

window.addEventListener("load", () => {
    const root = ReactDOM.createRoot(
        document.querySelector(".root")
    );
    root.render(<ListProvider />)
})
