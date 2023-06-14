import React from "react";
import Count from "./Count";

function Score() {
    return (
        <div className="scoreDiv">
            <p><b>Your score</b></p>
            <p className="correct">Correct</p>
            <Count />
            <p className="incorrect">Incorrect</p>
            <Count />
        </div>
    )
}

export default Score;