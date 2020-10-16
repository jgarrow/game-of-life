export const createGrid = (fillVal, gridSize) => {
    let arr = [];

    // create 2D array
    for (let row = 0; row < gridSize.rows; row++) {
        let innerArr = [];
        for (let col = 0; col < gridSize.columns; col++) {
            innerArr.push(fillVal);
        }

        arr.push(innerArr);
    }

    return arr;
};
