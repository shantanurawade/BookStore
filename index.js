/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import dashboard from './src/screens/dashboard';

AppRegistry.registerComponent(appName, () => dashboard);
