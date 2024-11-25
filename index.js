/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
import React from 'react'
import { Provider } from 'react-redux';
import store from './src/redux/Store';

const index = () => {
    return (
        <Provider store={store} >
            <App />
        </Provider >
    )
}

export default index

AppRegistry.registerComponent(appName, () => index);

