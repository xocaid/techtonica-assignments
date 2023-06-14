import React from "react";
import CardInfo from "./CardInfo";

function Flashcards() {
    return (
        <div className="flashcardsDiv">
            <CardInfo frontCard="Command Line: How do I move into a directory?" backCard="cd" />
            <CardInfo frontCard="Command Line: How do go up a directory level?" backCard="cd .." />
            <CardInfo frontCard="Command Line: How do I go to my root directory?" backCard=" cd~ OR cd/" />
            <CardInfo frontCard="Command Line: How do I make a new directory?" backCard="mkdir" />
            <CardInfo frontCard="Command Line: How do I make a new file?" backCard="touch" />
            <CardInfo frontCard="Command Line: How do I check what version of a program I am using?" backCard="--version" />
        </div>
    )
}
export default Flashcards;