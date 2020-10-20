import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from './theme/theme';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
