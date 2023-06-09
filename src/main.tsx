import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";

import store from './redux/store';
import App from "./App";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <ChakraProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    </Provider>,
)
