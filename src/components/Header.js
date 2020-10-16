/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from '@reach/router';

const Header = () => {
    return (
        <header
            sx={{
                width: '100%',
                bg: 'muted',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: `2px 0px 4px 0px rgba(45, 55, 72, 0.25)`,
                padding: '1rem 2rem',
            }}
        >
            {/* <div
                sx={{
                    width: '80%',
                    maxWidth: '960px',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            > */}
            <h1 sx={{ margin: '0' }}>Conway's Game of Life</h1>
            <nav
                sx={{
                    width: '300px',
                }}
            >
                <ul
                    sx={{
                        padding: '0',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                    }}
                >
                    <li sx={{ listStyle: 'none' }}>
                        <Link
                            to="/"
                            sx={{
                                textDecoration: 'none',
                                color: 'text',
                                ':hover': { textDecoration: 'underline' },
                            }}
                        >
                            Home
                        </Link>
                    </li>
                    <li sx={{ listStyle: 'none' }}>
                        <Link
                            to="/about"
                            sx={{
                                textDecoration: 'none',
                                color: 'text',
                                ':hover': { textDecoration: 'underline' },
                            }}
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            {/* </div> */}
        </header>
    );
};

export default Header;
