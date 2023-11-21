import Router from "./services/Router.js";
import PuzzleObjectFactory from "./services/puzzels.js";


import PuzzleOne from "./components/puzzleOne.js";
import PuzzleTwo from "./components/puzzleTwo.js";
import PuzzleThree from "./components/puzzleThree.js";
import PuzzleFour from "./components/puzzleFour.js";
import PuzzleFive from "./components/puzzleFive.js";
window.app = window.app || {};
app.Router = Router;
app.puzzles = [];
app.puzzles.push(PuzzleObjectFactory({
    title: "Puzzle One",
    solved: true
}),
    PuzzleObjectFactory({
    title: "Puzzle Two",
    solved: true
}),

    PuzzleObjectFactory({
    title: "Puzzle Three",
    solved: true
}),
    PuzzleObjectFactory({
    title: "Puzzle Four",
    solved: true
}),
    PuzzleObjectFactory({
    title: "Puzzle Five",
    solved: true
})
    );




window.addEventListener("DOMContentLoaded", () => {
    app.Router.init();
});

