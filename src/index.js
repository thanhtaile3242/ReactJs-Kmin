import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
let color = "yellow";
const color2 = "green";
const root = ReactDOM.createRoot(document.getElementById("root"));
const changeBackgroundColor = () => {
    color = color === "yellow" ? "green" : "yellow";
    renderApp();
};

const renderApp = () => {
    const h1 = (
        <>
            <h1
                style={{ color: "red", backgroundColor: color }}
                onClick={() => {
                    changeBackgroundColor();
                }}
            >
                Hellooooooo
            </h1>
            ;
        </>
    );

    root.render(h1);
};
renderApp();
// root.render(
//     // <React.StrictMode>
//     <App />
//     // </React.StrictMode>
// );
