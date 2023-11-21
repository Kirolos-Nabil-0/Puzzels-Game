import Puzzle from './Puzzle.js';

class PuzzleFive extends Puzzle {
    constructor() {
        const puzzleName = "Puzzle 5";
        const puzzleContent = "This is puzzle 5";
        const puzzleAnswer = null; // replace with actual answer if needed
        const styles = {
            divStyle: {
                display: "block",
                width: "100%",
                height: "100%",
                backgroundColor: "purple"
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

customElements.define("puzzle-five", PuzzleFive);
export default PuzzleFive;