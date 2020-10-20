/** @jsx jsx */
import { jsx, Label } from 'theme-ui';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ color, handleColorChange }) => {
    return (
        <Label
            htmlFor="colorPicker"
            sx={{
                position: 'absolute',
                bottom: '45px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'inline-block',
                width: 'auto',
            }}
        >
            <ChromePicker
                id="colorPicker"
                color={color}
                onChange={(clr) => handleColorChange(clr)}
            />
        </Label>
    );
};

export default ColorPicker;
