/** @jsx jsx */
import { jsx, Button } from 'theme-ui';

const Buttons = ({ isRunning, startSimulation, reset, step, randomize }) => {
    return (
        <div
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
            }}
        >
            <Button onClick={() => startSimulation()}>
                {isRunning ? 'Stop' : 'Start'}
            </Button>
            <Button onClick={() => reset()}>Reset</Button>
            <Button
                onClick={() => randomize()}
                disabled={isRunning}
                sx={{
                    transition: '0.2s background ease-in-out',

                    ':disabled': {
                        bg: 'secondary',
                    },
                }}
            >
                Random Grid
            </Button>
            <Button
                onClick={() => step()}
                disabled={isRunning}
                sx={{
                    transition: '0.2s background ease-in-out',

                    ':disabled': {
                        bg: 'secondary',
                    },
                }}
            >
                Step
            </Button>
        </div>
    );
};

export default Buttons;
