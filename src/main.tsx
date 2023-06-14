import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";

import {MantineProvider, MantineThemeOverride} from '@mantine/core';

import store from './features/store';
import App from "./App";

const myTheme: MantineThemeOverride = {
    colors: {

    }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MantineProvider>
    </Provider>,
)
