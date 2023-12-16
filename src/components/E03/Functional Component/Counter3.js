import { useState } from "react";
import Number from "./Number.js";
const Counter3 = (props) => {
    const [title, setTitle] = useState(props.title);
    const [start, setStart] = useState(props.start);

    const up = () => {
        setStart((start) => start + 1);
    };
    const down = () => {
        setStart((start) => start - 1);
    };
    return (
        <>
            <div className="counter">
                <Number
                    title={title}
                    start={start}
                    setStart={setStart}
                    up={up}
                    down={down}
                />
                <div className="counter__actions">
                    <button className="btn btn--yellow">Xin chào</button>
                    <button className="btn btn--blue">Tạm biệt</button>
                </div>
            </div>
        </>
    );
};
export default Counter3;
