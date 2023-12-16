import React from "react";
import ReactDOM from "react-dom/client";
import Counter2 from "./components/Counter2/Counter2.js";
// import Counter3 from "./components/E03/Class_Component/Counter3.js";
import Counter3 from "./components/E03/Functional Component/Counter3.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <Counter3 title={"Kmin Acacdemy"} start={1} />
    // </React.StrictMode>
);
