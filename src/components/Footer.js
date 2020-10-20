/** @jsx jsx */
import { jsx } from 'theme-ui';

import Buttons from './Buttons';
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
}) => {
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
                <p
                    sx={{
                        textAlign: 'center',
                        marginBottom: '0',
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
