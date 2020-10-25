This project is a React version of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life). 

## Using this project

1. Clone this repo and download it to your local computer
2. Install the dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run start
```

## Approach

The grid is created using CSS grid, with inputs stored in state to hold the size of the grid. Then, we can use the size inputs to dynamically create a 2D array with which to populate our grid. The 2D array values are either `0` or `1` to represent whether a cell is respectively "dead" or "alive". Because I wanted to use a recursive approach to trigger each "generation" of updated cells, I used `useCallback` so that the recursive `runSimulation` function wouldn't get recreated on every rerender. Then to make sure I was still accessing the most up to date value of state, I used `useRef` to check if the user wants to stop the function calls or not. If I just relied on the state, I could've run into some issues since state gets set and updated asynchronously. Hence the decision to use the `useRef` hook to access the state that tells us whether or not we want the animations to keep running.

I opted to not use something like Context or Redux to manage state so I could just focus on getting the functionality of the app working, so there is a fair amount of prop drilling. If I come back to this project, I'll probably use Context to help clean up all of the state and functions that are living in `App.js` that I prop drill down to my other components just to help clean up the `App.js` file.


## Features

Some extra features I added that have no effect on the core functionality of running the Game of Life:

- Input to allow the user to change the speed of the animations 
- Input to allow the user to change the color of the alive cells
- Input to allow the user to change the size of the grid cells
- Input to allow the user to change the number of columns in the grid
- Input to allow the user to change the number of rows in the grid
- A "generation" counter that increments every time the simulation is run to calculate a new generation
- A button to generate a random grid so the user doesn't have to create their own if they don't want to'
- A button to "step" to the next generation manually instead of having the simulation run on its own
