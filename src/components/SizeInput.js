/** @jsx jsx */
import { jsx, Label, Input } from 'theme-ui';

const SizeInput = ({ gridSize, handleChange, speed, setSpeed }) => {
    return (
        <div
            sx={{
                width: '50%',
                maxWidth: '400px',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 75px 1fr)',
                gridGap: '10px',
                alignItems: 'center',
            }}
        >
            <Label htmlFor="speed">Speed</Label>
            <Input
                id="speed"
                name="speed"
                type="number"
                min={0.01}
                value={speed}
                onChange={(e) => {
                    setSpeed(e.target.value);
                }}
            />
            <Label htmlFor="cellSize">Cell Size: </Label>
            <Input
                id="cellSize"
                name="cellSize"
                type="number"
                min="20"
                onChange={handleChange}
                value={gridSize.cellSize}
            />
            <Label htmlFor="columns">Columns: </Label>
            <Input
                id="columns"
                name="columns"
                type="number"
                min="3"
                onChange={handleChange}
                value={gridSize.columns}
            />
            <Label htmlFor="rows">Rows: </Label>
            <Input
                id="rows"
                name="rows"
                type="number"
                min="3"
                onChange={handleChange}
                value={gridSize.rows}
            />
        </div>
    );
};

export default SizeInput;
