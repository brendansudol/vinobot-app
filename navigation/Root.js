import React from 'react'
import { StatusBar, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import AboutScreen from '../screens/About'
import HomeScreen from '../screens/Home'

const navOptions = {
  headerStyle: { padding: 4 },
  headerTitleStyle: { fontSize: 22, fontWeight: 'bold' }
}

AboutScreen.navigationOptions = {
  title: 'About',
  ...navOptions
}

HomeScreen.navigationOptions = {
  header: null,
  title: 'Vinobot',
  headerBackTitle: 'Back'
}

const Main = StackNavigator(
  {
    Home: { screen: HomeScreen },
    About: { screen: AboutScreen }
  },
  { headerMode: 'screen' }
)

const Root = () => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="dark-content" hidden />
    <Main />
  </View>
)

export default Root
