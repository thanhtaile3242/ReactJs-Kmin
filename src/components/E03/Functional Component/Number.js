import { useEffect } from "react";
const Number = (props) => {
    const startValue = props.start;
    useEffect(() => {
        const timerId = setInterval(() => {
            props.setStart((startValue) => startValue + 1);
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <>
            <h2 style={{ color: "var(--red)", fontSize: "1.2em" }}>
                {props.title}
            </h2>
            <div style={{ fontWeight: "bold" }}>
                <span className="btn-change" onClick={props.down}>
                    &lt;
                </span>
                {startValue}
                <span className="btn-change" onClick={props.up}>
                    &gt;
                </span>
            </div>
        </>
    );
};
export default Number;
