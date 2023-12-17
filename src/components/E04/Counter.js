import React from "react";
import "./Counter.scss";
import MyButton from "./MyButton";
import SettingForm from "./SettingForm.js";
import Num from "./Num";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            end: 10,
        };
        this.handleNumber = this.handleNumber.bind(this);
    }

    handleNumber(startValue, endValue) {
        this.setState(() => ({
            start: +startValue,
            end: +endValue,
        }));
    }

    hello() {
        alert("Xin chào.");
    }
    render() {
        return (
            <div className="counter">
                <h2 style={{ color: "var(--red)", fontSize: "1.2em" }}>
                    {this.props.title}
                </h2>
                <SettingForm handleNumber={this.handleNumber} />
                <Num start={this.state.start} end={this.state.end} />
                <div className="counter__actions">
                    <button className="btn btn--yellow" onClick={this.hello}>
                        Xin chào
                    </button>
                    <button
                        className="btn btn--blue"
                        onClick={() => console.log("Tạm biệt")}
                    >
                        Tạm biệt
                    </button>
                </div>
            </div>
        );
    }
}

export default Counter;
