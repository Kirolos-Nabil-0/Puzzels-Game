function  PuzzleObjectFactory (puzzles) {
let puzzle = Object.create(PuzzleObjectFactory.prototype);
puzzle.title = puzzles.title;
puzzle.solved = puzzles.solved;

return puzzle;

}
export default PuzzleObjectFactory;