import "../Counter/Counter.scss";
import { useState } from "react";
import NumberContent from "./NumberContent.js";
import MyButton from "./MyButton.js";
const Counter2 = (props) => {
    const heading = props.heading;
    const [color, setColor] = useState("yellow");
    const [start, setStart] = useState(props.start);
    const [timerId, setTimerId] = useState(null);

    const handleChangeColor = () => {
        if (color === "yellow") setColor("blue");
        if (color === "blue") setColor("yellow");
        playNumber();
    };

    const playNumber = () => {
        if (timerId === null) {
            const id = setInterval(() => {
                setStart((Start) => Start + 1);
            }, 1500);
            setTimerId(id);
        } else {
            clearInterval(timerId);
            setTimerId(null);
        }
    };

    return (
        <>
            <div className="counter">
                <h2 style={{ color: "var(--red)", fontSize: "1.2em" }}>
                    {heading}
                </h2>
                <NumberContent number={start} />
                <MyButton color={color} handleChangeColor={handleChangeColor} />
                <div className="counter__actions">
                    <button className="btn btn--yellow">Xin chào</button>
                    <button className="btn btn--blue">Tạm biệt</button>
                </div>
            </div>
        </>
    );
};
export default Counter2;
