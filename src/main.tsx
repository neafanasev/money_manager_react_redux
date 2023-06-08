import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import store from './features/store';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
)