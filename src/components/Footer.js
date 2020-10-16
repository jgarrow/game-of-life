/** @jsx jsx */
import { jsx } from 'theme-ui';

import Buttons from './Buttons';
import SizeInput from './SizeInput';

const Footer = ({
    isRunning,
    startSimulation,
    reset,
    step,
    generation,
    gridSize,
    handleGridSizeChange,
    speed,
    setSpeed,
}) => {
    return (
        <footer
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                // margin: '1rem 0',
                boxSizing: 'border-box',
                padding: '1rem',
                bg: 'muted',
                position: 'sticky',
                bottom: '0',
                boxShadow: `2px 0px 4px 0px rgba(45, 55, 72, 0.25)`,
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
                />
                <p
                    sx={{
                        textAlign: 'center',
                    }}
                >{`Generation: ${generation}`}</p>
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
