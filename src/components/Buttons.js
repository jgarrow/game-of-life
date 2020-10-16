/** @jsx jsx */
import { jsx, Button } from 'theme-ui';

const Buttons = ({ isRunning, startSimulation, reset, step }) => {
    return (
        <div
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
            }}
        >
            <Button
                onClick={() => {
                    startSimulation();
                }}
            >
                {isRunning ? 'Stop' : 'Start'}
            </Button>
            <Button
                onClick={() => {
                    reset();
                }}
            >
                Reset
            </Button>
            <Button
                onClick={() => {
                    step();
                }}
            >
                Step
            </Button>
        </div>
    );
};

export default Buttons;