import Puzzle from './Puzzle.js';

class PuzzleThree extends Puzzle {
    constructor() {
        const puzzleName = "Puzzle 3";
        const puzzleContent = "This is puzzle 3";
        const puzzleAnswer = null; // replace with actual answer if needed
        const styles = {
            divStyle: {
                display: "block",
                width: "100%",
                height: "100%",
                backgroundColor: "green"
            },
            textStyle: {
                color: "white",
                textAlign: "center",
                fontSize: "50px",
                paddingTop: "50px"
            },
            contentStyle: {
                color: "white",
                textAlign: "center",
                fontSize: "50px",
                paddingTop: "50px"
            }
        };

        super(puzzleName, puzzleContent, puzzleAnswer, styles);
    }
}

customElements.define("puzzle-three", PuzzleThree);
export  default PuzzleThree;