/** @jsx jsx */
import { jsx } from 'theme-ui';

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
    generation,
    handleGridSizeChange,
    speed,
    setSpeed,
}) => {
    return (
        <div className="App">
            <main
                sx={{
                    width: '80%',
                    maxWidth: '960px',
                    margin: '1rem auto',
                }}
            >
                <Grid
                    gridSize={gridSize}
                    isRunning={isRunning}
                    incrementGeneration={incrementGeneration}
                    numCells={numCells}
                    handleCellClick={handleCellClick}
                />
            </main>
            <Footer
                isRunning={isRunning}
                startSimulation={startSimulation}
                reset={reset}
                step={step}
                generation={generation}
                gridSize={gridSize}
                handleGridSizeChange={handleGridSizeChange}
                speed={speed}
                setSpeed={setSpeed}
            />
        </div>
    );
};

export default Home;
