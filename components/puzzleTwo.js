import Puzzle from './Puzzle.js';
class PuzzleTwo extends Puzzle {
    constructor() {
        const puzzleName = "Puzzle 2";
        const puzzleContent = "This is puzzle 2";
        const puzzleAnswer = null; // replace with actual answer if needed
        const styles = {
            divStyle: {
                display: "block",
                width: "100%",
                height: "100%",
                backgroundColor: "blue"
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

customElements.define("puzzle-two", PuzzleTwo);
export default PuzzleTwo;