import React from "react";
class Number extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timerId: null,
            start: this.props.start,
            title: this.props.title,
        };
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
    }
    componentDidMount() {
        const timerId = setInterval(() => {
            this.setState((state) => ({
                start: state.start + 1,
            }));
        }, 1000);

        this.setState({ timerId });
    }
    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }
    up() {
        this.setState((state) => ({
            start: state.start + 1,
        }));
    }

    down() {
        this.setState((state) => ({
            start: state.start - 1,
        }));
    }
    render() {
        return (
            <>
                <h2 style={{ color: "var(--red)", fontSize: "1.2em" }}>
                    {this.state.title}
                </h2>

                <div style={{ fontWeight: "bold" }}>
                    <span className="btn-change" onClick={this.down}>
                        &lt;
                    </span>
                    {this.state.start}
                    <span className="btn-change" onClick={this.up}>
                        &gt;
                    </span>
                </div>
            </>
        );
    }
}
export default Number;
