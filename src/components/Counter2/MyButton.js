const MyButton = (props) => {
    const { color, handleChangeColor } = props;
    let className = "";
    let content = "";
    switch (color) {
        case "yellow":
            className = "btn btn--yellow";
            content = String.fromCharCode(10008);
            break;
        case "blue":
            className = "btn btn--blue";
            content = "►";
            break;
        case "red":
            className = "btn btn--red";
            break;

        default:
            break;
    }

    return (
        <>
            <button className={className} onClick={handleChangeColor}>
                {content}
            </button>
        </>
    );
};

export default MyButton;
