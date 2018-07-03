import { AppRegistry } from 'react-native';
import App from './App';
import Main from './main';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Method `jumpToIndex` is deprecated' ]);
AppRegistry.registerComponent('navigation', () => Main);
