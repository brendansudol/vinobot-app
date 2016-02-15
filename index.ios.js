'use strict';

import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
} from 'react-native';

import AboutView from './views/AboutView.js';
import HomeView from './views/HomeView.js';


class Vinobot extends Component {
  render() {
    return (
      <NavigatorIOS
        ref="nav"
        style={{flex: 1}}
        tintColor="#333"
        titleTextColor="#333"
        translucent={true}
        initialRoute={{
          component: HomeView,
          title: 'Vinobot',
          rightButtonTitle: '?',
          backButtonTitle: 'Back',
          onRightButtonPress: () => {
            this.refs.nav.push({
                component: AboutView,
                title: 'About',
            });
          },
        }}
      />
    );
  }
}

AppRegistry.registerComponent('Vinobot', () => Vinobot);
