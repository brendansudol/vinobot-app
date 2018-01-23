import React from 'react'
import { Button, StatusBar, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import AboutScreen from '../screens/About'
import HomeScreen from '../screens/Home'

const navOptions = {
  headerStyle: { padding: 8 },
  headerTitleStyle: { fontSize: 22, fontWeight: 'bold' }
}

AboutScreen.navigationOptions = {
  title: 'About',
  ...navOptions
}

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: 'Vinobot',
  headerBackTitle: 'Back',
  headerRight: (
    <Button title="About" onPress={() => navigation.navigate('About')} />
  ),
  ...navOptions
})

const Main = StackNavigator({
  Home: { screen: HomeScreen },
  About: { screen: AboutScreen }
})

const Root = () => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="dark-content" />
    <Main />
  </View>
)

export default Root
