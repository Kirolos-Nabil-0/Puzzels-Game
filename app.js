import Router from "./services/Router.js";
import PuzzleObjectFactory from "./services/puzzels.js";


import PuzzleOne from "./components/puzzleOne.js";
import PuzzleTwo from "./components/puzzleTwo.js";
import PuzzleThree from "./components/puzzleThree.js";
import PuzzleFour from "./components/puzzleFour.js";
import PuzzleFive from "./components/puzzleFive.js";
import PasswordInput from "./components/Password.js";
import  PasswordElemt from "./services/password.js";

window.app = window.app || {};
app.Router = Router;
app.puzzles = [];
app.puzzles.push(PuzzleObjectFactory({
    title: "Puzzle One",
    solved: false
}),
    PuzzleObjectFactory({
    title: "Puzzle Two",
    solved: false,
        secret: "12"
}),

    PuzzleObjectFactory({
    title: "Puzzle Three",
    solved: false,
            secret: "12"

}),
    PuzzleObjectFactory({
    title: "Puzzle Four",
        solved: false,
        secret: "12"}),
    PuzzleObjectFactory({
        solved: false,
        secret: "12",
})
    );

if (! localStorage.getItem("puzzles")) {
    localStorage.setItem("puzzles", JSON.stringify(app.puzzles));
}

window.addEventListener("DOMContentLoaded", () => {
    app.Router.init();
});

