import React, { Component } from 'react'
import { AppLoading, Font } from 'expo'
import { EvilIcons } from '@expo/vector-icons'

import Root from './navigation/Root'

class App extends Component {
  state = { ready: false }

  // eslint-disable-next-line class-methods-use-this
  async cacheResources() {
    const fonts = [EvilIcons.font]
    const cacheFonts = fonts.map(font => Font.loadAsync(font))

    await Promise.all(cacheFonts)
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
