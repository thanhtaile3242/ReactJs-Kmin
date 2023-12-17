import React from "react";

class SettingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startValue: 0,
            endValue: 10,
            isInvalid: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStartValue = this.handleStartValue.bind(this);
        this.handleEndValue = this.handleEndValue.bind(this);
    }

    handleStartValue(event) {
        this.setState({
            startValue: Number(event.target.value),
        });
    }

    handleEndValue(event) {
        this.setState({
            endValue: Number(event.target.value),
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.startValue >= this.state.endValue) {
            this.setState({
                isInvalid: true,
            });
            return;
        } else {
            this.setState({
                isInvalid: false,
            });
            this.props.handleNumber(this.state.startValue, this.state.endValue);
        }
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Thiết lập</legend>
                        <div className="container">
                            <label>
                                Số bắt đầu
                                <input
                                    name="start"
                                    type="number"
                                    value={this.startValue}
                                    size="15"
                                    onChange={(event) => {
                                        this.handleStartValue(event);
                                    }}
                                />
                            </label>

                            <label>
                                <input
                                    name="end"
                                    type="number"
                                    value={this.endValue}
                                    onChange={(event) => {
                                        this.handleEndValue(event);
                                    }}
                                />
                                Số kết thúc
                            </label>
                        </div>
                        {this.state.isInvalid && (
                            <p className="error-message">
                                Số bắt đầu lớn hơn hoặc bằng số kết thúc !!!
                            </p>
                        )}

                        <input type="submit" value="Áp dụng" />
                    </fieldset>
                </form>
            </>
        );
    }
}

export default SettingForm;
