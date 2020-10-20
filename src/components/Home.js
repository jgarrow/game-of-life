/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';

import Grid from './Grid';
import Footer from './Footer';

const Home = ({
    gridSize,
    isRunning,
    incrementGeneration,
    numCells,
    handleCellClick,
    startSimulation,
    reset,
    step,
    randomize,
    generation,
    handleGridSizeChange,
    speed,
    setSpeed,
    color,
    handleColorChange,
}) => {
    return (
        <Fragment>
            <main
                sx={{
                    width: '100%',
                    padding: '1rem 0',
                    margin: '0 auto',
                    height: 'calc(100vh - 222px)',
                    overflow: 'scroll',
                }}
            >
                <Grid
                    gridSize={gridSize}
                    isRunning={isRunning}
                    incrementGeneration={incrementGeneration}
                    numCells={numCells}
                    handleCellClick={handleCellClick}
                    color={color}
                />
            </main>
            <Footer
                isRunning={isRunning}
                startSimulation={startSimulation}
                reset={reset}
                step={step}
                randomize={randomize}
                generation={generation}
                gridSize={gridSize}
                handleGridSizeChange={handleGridSizeChange}
                speed={speed}
                setSpeed={setSpeed}
                color={color}
                handleColorChange={handleColorChange}
            />
        </Fragment>
    );
};

export default Home;
