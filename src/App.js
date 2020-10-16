/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment, useState, useEffect, useCallback, useRef } from 'react';
import { Router, Link } from '@reach/router';

import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';

import { runSingleSimulation } from './utils/runSingleSimulation';
import { createGrid } from './utils/createGrid';

import './App.css';

function App() {
    const [isRunning, setIsRunning] = useState(false);
    const [speed, setSpeed] = useState(1);
    const [generation, setGeneration] = useState(1); // counter to keep track of each "iteration"
    const [gridSize, setGridSize] = useState({
        columns: 25,
        rows: 25,
        cellSize: 50,
    });
    const [numCells, setNumCells] = useState([]);
    const generationRef = useRef(generation);
    generationRef.current = generation;

    const handleGridSizeChange = (e) => {
        setGridSize({
            ...gridSize,
            [e.target.name]: e.target.value,
        });
    };

    // being used in `useCallback`, so to get the most up to date value of `generation` state, we need to use the useRef value
    const incrementGeneration = () => {
        setGeneration(generationRef.current + 1);
    };

    const handleCellClick = (col, row) => {
        const tempNumCells = [...numCells];

        tempNumCells[row][col] = tempNumCells[row][col] === 1 ? 0 : 1;
        setNumCells(tempNumCells);
    };

    // using a ref makes sure that the `isRunning` value in `runSimulation` is always up to date, even though `runSimulation` is never "updating"
    const isRunningRef = useRef(isRunning);
    isRunningRef.current = isRunning;

    const speedRef = useRef(speed);
    speedRef.current = speed;

    // dependency array as second param means our function will only be created when gridSize changes instead of at every render
    const runSimulation = useCallback(() => {
        if (!isRunningRef.current) {
            return;
        }

        runSingleSimulation(gridSize, setNumCells, incrementGeneration);

        // wait 1 second and then run the simulation again
        setTimeout(runSimulation, speedRef.current * 1000);
    }, [gridSize]);

    const startSimulation = () => {
        setIsRunning(!isRunning);
        if (!isRunning) {
            isRunningRef.current = true;
            runSimulation();
        }
    };

    const reset = () => {
        // set `isRunning` to false
        setIsRunning(false);

        // reset generation counter to 1
        setGeneration(1);

        // create new grid arry and reset state
        setNumCells(createGrid(0, gridSize));
    };

    const step = () => {
        if (!isRunning) {
            runSingleSimulation(gridSize, setNumCells, incrementGeneration);
        }
    };

    useEffect(() => {
        setNumCells(createGrid(0, gridSize));
    }, [gridSize]);

    return (
        <Fragment>
            <Header />
            <Router>
                <Home
                    path="/"
                    gridSize={gridSize}
                    isRunning={isRunning}
                    incrementGeneration={incrementGeneration}
                    numCells={numCells}
                    handleCellClick={handleCellClick}
                    startSimulation={startSimulation}
                    reset={reset}
                    step={step}
                    generation={generation}
                    handleGridSizeChange={handleGridSizeChange}
                    speed={speed}
                    setSpeed={setSpeed}
                />
                <About path="/about" />
            </Router>
        </Fragment>
    );
}

export default App;
