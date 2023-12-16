import React from "react";
import Number from "./Number.js";
import "./Counter.scss";

class Counter3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: this.props.start,
            title: this.props.title,
        };
    }
    render() {
        return (
            <>
                <div className="counter">
                    <Number start={this.state.start} title={this.state.title} />
                    <div className="counter__actions">
                        <button className="btn btn--yellow">Xin chào</button>
                        <button className="btn btn--blue">Tạm biệt</button>
                    </div>
                </div>
            </>
        );
    }
}
export default Counter3;
