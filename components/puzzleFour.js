import Puzzle from './Puzzle.js';

class PuzzleFour extends Puzzle {
    constructor() {
        const puzzleName = "Puzzle 4";
        const puzzleContent = "This is puzzle 4";
        const puzzleAnswer = null; // replace with actual answer if needed
        const styles = {
            divStyle: {
                display: "block",
                width: "100%",
                height: "100%",
                backgroundColor: "yellow"
            },
            textStyle: {
                color: "black",
                textAlign: "center",
                fontSize: "50px",
                paddingTop: "50px"
            },
            contentStyle: {
                color: "black",
                textAlign: "center",
                fontSize: "50px",
                paddingTop: "50px"
            }
        };

        super(puzzleName, puzzleContent, puzzleAnswer, styles);
    }
}

customElements.define("puzzle-four", PuzzleFour);

export default PuzzleFour;
