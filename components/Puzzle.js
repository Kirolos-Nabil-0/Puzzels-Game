class Puzzle extends HTMLElement {
    constructor(puzzleName, puzzleContent, puzzleAnswer, styles) {
        super();

        this.root = this.attachShadow({ mode: "open" });

        // Create elements and set styles
        const divOfPuzzle = document.createElement("div");
        Object.assign(divOfPuzzle.style, styles.divStyle);

        const textOfPuzzle = document.createElement("h1");
        textOfPuzzle.textContent = puzzleName;
        Object.assign(textOfPuzzle.style, styles.textStyle);

        const puzzleContentElement = document.createElement("p");
        puzzleContentElement.textContent = puzzleContent;
        Object.assign(puzzleContentElement.style, styles.contentStyle);

        // Append elements to divOfPuzzle
        divOfPuzzle.appendChild(textOfPuzzle);
        divOfPuzzle.appendChild(puzzleContentElement);

        // Append divOfPuzzle to the shadow DOM
        this.root.appendChild(divOfPuzzle);
    }
}

customElements.define("puzzle-element", Puzzle);

export default Puzzle;
