export const runSingleSimulation = (
    gridSize,
    setNumCells,
    incrementGeneration
) => {
    setNumCells((currNumCells) => {
        const neighborCoordinates = [
            [0, 1],
            [0, -1],
            [1, -1],
            [-1, 1],
            [1, 1],
            [-1, -1],
            [1, 0],
            [-1, 0],
        ];

        // make copy of current state
        const updatedCells = currNumCells.map((arr) => [...arr]);

        for (let i = 0; i < gridSize.rows; i++) {
            for (let j = 0; j < gridSize.columns; j++) {
                let aliveNeighbors = 0;

                neighborCoordinates.forEach(([x, y]) => {
                    const newI = i + x;
                    const newJ = j + y;

                    // handle edge cases, assume edges are "dead" cells
                    if (
                        newI >= 0 &&
                        newI < gridSize.rows &&
                        newJ >= 0 &&
                        newJ < gridSize.columns
                    ) {
                        aliveNeighbors += currNumCells[newI][newJ];
                    }
                });

                // if cellAliveNeighbors < 2, kill cell
                // if cellAliveNeighbors > 3, kill cell
                // if cellAliveNeighbors === 3, revive cell
                if (aliveNeighbors < 2 || aliveNeighbors > 3) {
                    updatedCells[i][j] = 0;
                } else if (currNumCells[i][j] === 0 && aliveNeighbors === 3) {
                    updatedCells[i][j] = 1;
                }
            }
        }

        return updatedCells;
    });

    incrementGeneration();
};
