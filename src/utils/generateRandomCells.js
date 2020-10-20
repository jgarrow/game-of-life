export const generateRandomCells = (gridSize) => {
    let arr = [];

    // create 2D array
    for (let row = 0; row < gridSize.rows; row++) {
        let innerArr = [];
        for (let col = 0; col < gridSize.columns; col++) {
            const fillVal = Math.floor(Math.random() * 2);

            innerArr.push(fillVal);
        }

        arr.push(innerArr);
    }

    return arr;
};
