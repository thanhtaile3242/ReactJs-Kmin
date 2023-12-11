import React from "react";
import ReactDOM from "react-dom/client";
import Counter2 from "./components/Counter2/Counter2.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <Counter2 heading={"Kmin Acacdemy"} start={1} />
    // </React.StrictMode>
);
