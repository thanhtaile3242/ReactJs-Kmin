import "./Num.scss";
import { useState } from "react";
const NumberContent = (props) => {
    const value = props.number;
    return (
        <>
            <div style={{ fontWeight: "bold" }}>
                <span className="btn-change">&lt;</span>
                <span>{value}</span>
                <span className="btn-change">&gt;</span>
            </div>
        </>
    );
};

export default NumberContent;
