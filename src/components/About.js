/** @jsx jsx */
import { jsx } from 'theme-ui';

const About = () => {
    return (
        <div sx={{ width: '80%', maxWidth: '960px', margin: '0 auto' }}>
            <section>
                <h2>Summary</h2>
                <p>
                    The Game of Life, also known simply as Life, is a cellular
                    automaton devised by the British mathematician John Horton
                    Conway in 1970.[1] It is a zero-player game, meaning that
                    its evolution is determined by its initial state, requiring
                    no further input. One interacts with the Game of Life by
                    creating an initial configuration and observing how it
                    evolves. It is Turing complete and can simulate a universal
                    constructor or any other Turing machine.
                </p>
            </section>

            <section>
                <h2>Rules</h2>
                <p>
                    The universe of the Game of Life is an infinite,
                    two-dimensional orthogonal grid of square cells, each of
                    which is in one of two possible states, live or dead, (or
                    populated and unpopulated, respectively). Every cell
                    interacts with its eight neighbours, which are the cells
                    that are horizontally, vertically, or diagonally adjacent.
                    At each step in time, the following transitions occur:
                </p>

                <ol>
                    <li>
                        Any live cell with fewer than two live neighbours dies,
                        as if by underpopulation.
                    </li>
                    <li>
                        Any live cell with two or three live neighbours lives on
                        to the next generation.
                    </li>
                    <li>
                        Any live cell with more than three live neighbours dies,
                        as if by overpopulation.
                    </li>
                    <li>
                        Any dead cell with exactly three live neighbours becomes
                        a live cell, as if by reproduction.
                    </li>
                </ol>
            </section>

            <p>
                **Summary and Rules from{' '}
                <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
                    Wikipedia
                </a>
            </p>
        </div>
    );
};

export default About;
