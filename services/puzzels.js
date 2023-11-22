function  PuzzleObjectFactory (puzzles) {
let puzzle = Object.create(PuzzleObjectFactory.prototype);
puzzle.title = puzzles.title;
puzzle.solved = puzzles.solved;
puzzle.secret = puzzles.secret;





return puzzle;

}
export default PuzzleObjectFactory;