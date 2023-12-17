import React from "react";
import MyButton from "./MyButton";
import StopButton from "./StopButton.js";
class Num extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: Number(this.props.start),
            isPlaying: false,
        };

        this.timerID = null;

        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
        this.change = this.change.bind(this);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.stop = this.stop.bind(this);
    }
    componentDidMount() {
        if (this.props.autoplay) {
            this.timerID = setInterval(() => this.up(), 1000);
        }
    }

    componentDidUpdate(props) {
        if (this.state.value === this.props.end) {
            clearInterval(this.timerID);
        }

        if (props.start !== this.props.start) {
            this.setState({
                value: Number(this.props.start),
            });
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    up() {
        this.setState((state) => ({
            value: state.value + 1,
        }));
    }

    down() {
        this.setState((state) => ({
            value: state.value - 1,
        }));
    }

    change(k) {
        this.setState((state) => ({
            value: state.value + k,
        }));
    }

    play() {
        this.timerID = setInterval(() => {
            this.up();
        }, 1000);
        this.setState((state) => ({
            isPlaying: !state.isPlaying,
        }));
    }

    pause() {
        clearInterval(this.timerID);
        this.setState((state) => ({
            isPlaying: !state.isPlaying,
        }));
    }

    stop() {
        clearInterval(this.timerID);
        this.setState(() => ({
            isPlaying: false,
            value: this.props.start,
        }));
    }

    render() {
        return (
            <>
                <div style={{ fontWeight: "bold" }}>
                    <span
                        className="btn-change"
                        onClick={() => this.change(-2)}
                    >
                        &lt;
                    </span>
                    <span>{this.state.value}</span>
                    <span className="btn-change" onClick={this.up}>
                        &gt;
                    </span>
                </div>
                {this.state.isPlaying ? (
                    <MyButton color="yellow" onClick={this.pause}>
                        ✘
                    </MyButton>
                ) : (
                    <MyButton color="blue" onClick={this.play}>
                        ►
                    </MyButton>
                )}
                <StopButton color="red" onClick={this.stop}>
                    ■
                </StopButton>
            </>
        );
    }
}

export default Num;
