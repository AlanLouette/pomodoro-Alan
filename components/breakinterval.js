import React from "react";

function Breakinterval(props) {
    function decreaseCounter() {
        if (props.Breakinterval === 1) {
            return;
        }
        props.decreaseBreak();
    }

    function increaseCounter() {
        if (props.Breakinterval === 60) {
            return;
        }

        props.IncreaseBreak();
    }
    return (
        <section>
            <h4> Break length </h4>{" "}
            <section className="interval-container">
                <button onClick={decreaseCounter}> Down </button>{" "}
                <p className="interval-length"> {props.Breakinterval} </p>{" "}
                <button onClick={increaseCounter}> Up </button>{" "}
            </section>{" "}
        </section>
    );
}

export default Breakinterval;
