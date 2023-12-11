import React from "react";
import "./Counter.scss";
class Counter extends React.Component {
    constructor() {
        super();
        this.name = "Kmin";
        this.hello = this.hello.bind(this);
    }

    hello = (str) => {
        alert(str + " " + this.name);
    };

    bye = () => {
        console.log("good bye");
    };
    render = () => {
        return (
            <>
                <div className="counter">
                    <h2 style={{ color: "var(--red)", fontSize: "1.2em" }}>
                        Bộ đếm Kmin
                    </h2>
                    <div style={{ fontWeight: "bold" }}>1</div>
                    <div className="counter__actions">
                        <button
                            className="btn btn--yellow"
                            onClick={() => {
                                this.hello("xin chào");
                            }}
                        >
                            Xin chào
                        </button>
                        <button
                            className="btn btn--blue"
                            onClick={() => {
                                this.bye();
                            }}
                        >
                            Tạm biệt
                        </button>
                    </div>
                </div>
            </>
        );
    };
}

export default Counter;
