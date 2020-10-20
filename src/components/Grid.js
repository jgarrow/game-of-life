/** @jsx jsx */
import { jsx } from 'theme-ui';

import Cell from './Cell';

const Grid = ({ gridSize, isRunning, numCells, handleCellClick, color }) => {
    const { columns, rows, cellSize } = gridSize;

    return (
        <div
            sx={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, ${cellSize}px)`,
                gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
                justifyContent: 'center',
            }}
        >
            {numCells.length
                ? numCells.map((row, i) => {
                      return row
                          .map((cell, j) => (
                              <Cell
                                  key={`cell-${i}=${j}`}
                                  isAlive={cell}
                                  isRunning={isRunning}
                                  handleClick={() => handleCellClick(j, i)}
                                  coordinates={{ col: j, row: i }}
                                  color={color}
                              />
                          ))
                          .flat();
                  })
                : null}
        </div>
    );
};

export default Grid;
