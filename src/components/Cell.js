/** @jsx jsx */
import { jsx } from 'theme-ui';

const Cell = ({ isAlive, isRunning, handleClick, color }) => {
    return (
        <div
            sx={{
                bg: isAlive ? color : 'background',
                border: '1px solid',
                borderColor: color,
            }}
            onClick={() => {
                if (!isRunning) {
                    handleClick();
                }
            }}
        ></div>
    );
};

export default Cell;
