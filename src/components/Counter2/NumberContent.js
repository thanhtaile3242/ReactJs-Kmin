import "./Num.scss";
import { useState } from "react";
const NumberContent = (props) => {
    // const [value, setValue] = useState(props.number);
    const value = props.number;
    // const handleChange = (type) => {
    //     if (type === "DOWN") {
    //         setValue(value - 1);
    //     }
    //     if (type === "UP") {
    //         setValue(value + 1);
    //     }
    // };
    console.log(value);
    return (
        <>
            <div style={{ fontWeight: "bold" }}>
                <span
                    className="btn-change"
                    // onClick={() => {
                    //     handleChange("DOWN");
                    // }}
                >
                    &lt;
                </span>
                <span>{value}</span>
                <span
                    className="btn-change"
                    // onClick={() => {
                    //     handleChange("UP");
                    // }}
                >
                    &gt;
                </span>
            </div>
        </>
    );
};

export default NumberContent;
