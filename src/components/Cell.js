/** @jsx jsx */
import { jsx } from 'theme-ui';

const Cell = ({ isAlive, isRunning, handleClick, coordinates }) => {
    return (
        <div
            sx={{
                bg: isAlive ? 'secondary' : 'background',
                border: '1px solid',
                borderColor: 'secondary',
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
