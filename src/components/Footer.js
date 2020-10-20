/** @jsx jsx */
import { jsx, Button } from 'theme-ui';
import { useState } from 'react';

import Buttons from './Buttons';
import ColorPicker from './ColorPicker';
import SizeInput from './SizeInput';

const Footer = ({
    isRunning,
    startSimulation,
    reset,
    step,
    randomize,
    generation,
    gridSize,
    handleGridSizeChange,
    speed,
    setSpeed,
    color,
    handleColorChange,
}) => {
    const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

    return (
        <footer
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                boxSizing: 'border-box',
                padding: '1rem',
                bg: 'muted',
                position: 'sticky',
                bottom: '0',
                boxShadow: '2px 0px 4px 0px rgba(45, 55, 72, 0.25)',
            }}
        >
            <div
                sx={{
                    width: '50%',
                }}
            >
                <Buttons
                    isRunning={isRunning}
                    startSimulation={startSimulation}
                    reset={reset}
                    step={step}
                    randomize={randomize}
                />
                <div
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                    }}
                >
                    <p
                        sx={{
                            textAlign: 'center',
                            // marginBottom: '0',
                        }}
                    >{`Generation: ${generation}`}</p>
                    <Button
                        disabled={isRunning}
                        onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
                        sx={{
                            transition: '0.2s background ease-in-out',

                            ':disabled': {
                                bg: 'secondary',
                            },
                        }}
                    >
                        Change Color
                    </Button>
                    {isColorPickerOpen ? (
                        <ColorPicker
                            color={color}
                            handleColorChange={handleColorChange}
                        />
                    ) : null}
                </div>
            </div>
            <SizeInput
                gridSize={gridSize}
                handleChange={handleGridSizeChange}
                speed={speed}
                setSpeed={setSpeed}
            />
        </footer>
    );
};

export default Footer;
