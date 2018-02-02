import React, { Component } from 'react'
import { AppLoading, Asset, Font } from 'expo'
import { Entypo } from '@expo/vector-icons'

import Root from './navigation/Root'

class App extends Component {
  state = { ready: false }

  // eslint-disable-next-line class-methods-use-this
  async cacheResources() {
    const imgs = [require('./assets/logo.png')]
    const cacheImgs = imgs.map(img => Asset.fromModule(img).downloadAsync())

    const fonts = [Entypo.font]
    const cacheFonts = fonts.map(font => Font.loadAsync(font))

    await Promise.all([...cacheImgs, ...cacheFonts])
  }

  render() {
    if (!this.state.ready) {
      return (
        <AppLoading
          startAsync={this.cacheResources}
          onFinish={() => this.setState({ ready: true })}
          onError={console.warn}
        />
      )
    }

    return <Root />
  }
}

export default App
