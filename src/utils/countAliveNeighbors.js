export const countAliveNeighbors = (
    numCols,
    numRows,
    currIndex,
    // isAlive,
    arrCells
) => {
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

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            let aliveNeighbors = 0;

            neighborCoordinates.forEach(([x, y]) => {
                const newI = i + x;
                const newJ = j + y;

                if (
                    newI >= 0 &&
                    newI < numRows &&
                    newJ > -0 &&
                    newJ < numCols
                ) {
                    aliveNeighbors += arrCells[newI][newJ];
                }
            });

            console.log(aliveNeighbors);
        }
    }

    // currIndex % numCols === 0, then i'm at the left edge already
    // currIndex % numCols === numCols - 1, then i'm at the right edge already
    // currIndex < numCols, then i'm at the top row
    // (currIndex + numCols) > arrCells.length, then i'm at the bottom row
    // const isAtRightEdge = currIndex % numCols === numCols - 1;
    // const isAtLeftEdge = currIndex % numCols === 0;
    // const isAtTopRow = currIndex < numCols;
    // const isAtBottomRow = currIndex + numCols >= arrCells.length;

    // const topLeft =
    //     !isAtLeftEdge && !isAtTopRow ? arrCells[currIndex - numCols - 1] : 0;
    // const topCenter = !isAtTopRow ? arrCells[currIndex - numCols] : 0;
    // const topRight =
    //     !isAtRightEdge && !isAtTopRow ? arrCells[currIndex - numCols + 1] : 0;

    // const left = !isAtLeftEdge ? arrCells[currIndex - 1] : 0;
    // const right = !isAtRightEdge ? arrCells[currIndex + 1] : 0;

    // const bottomLeft =
    //     !isAtLeftEdge && !isAtBottomRow ? arrCells[currIndex + numCols - 1] : 0;
    // const bottomCenter = !isAtBottomRow ? arrCells[currIndex + numCols] : 0;
    // const bottomRight =
    //     !isAtRightEdge && !isAtBottomRow
    //         ? arrCells[currIndex + numCols + 1]
    //         : 0;

    // // console.log('topLeft: ', topLeft);
    // // console.log('topCenter: ', topCenter);
    // // console.log('topRight: ', topRight);
    // // console.log('left: ', left);
    // // console.log('right: ', right);
    // // console.log('bottomLeft: ', bottomLeft);
    // // console.log('bottomCenter: ', bottomCenter);
    // // console.log('bottomRight: ', bottomRight);

    // return (
    //     topLeft +
    //     topCenter +
    //     topRight +
    //     left +
    //     right +
    //     bottomLeft +
    //     bottomCenter +
    //     bottomRight
    // );
};
