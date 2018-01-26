import React, { Component } from 'react'
import {
  Dimensions,
  Platform,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
import { Speech } from 'expo'
import { EvilIcons as Icon } from '@expo/vector-icons'

import { getRandomColor } from '../util/colors'
import generateNote from '../util/note'

const { height } = Dimensions.get('window')

const Btn = ({ action, icon, text, size = 40 }) => (
  <TouchableHighlight style={styles.btn} underlayColor={null} onPress={action}>
    <View>
      <Icon style={styles.btnIcon} name={icon} size={size} />
      <Text style={styles.btnText}>{text}</Text>
    </View>
  </TouchableHighlight>
)

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: getRandomColor(),
      note: generateNote(),
      speaking: false
    }
  }

  handleRefresh = () => {
    this.setState(prev => ({
      color: getRandomColor(prev.color),
      note: generateNote()
    }))
  }

  handleShare = () => {
    const { note } = this.state

    Share.share({ message: note }, { dialogTitle: 'Share wine tasting note' })
      .then(result => console.log(`Share complete: ${JSON.stringify(result)}`))
      .catch(err => console.log(`Share error: ${JSON.stringify(err)}`))
  }

  handleSpeak = () => {
    const { note, speaking } = this.state
    if (speaking) return

    const start = () => this.setState({ speaking: true })
    const complete = () =>
      this.state.speaking && this.setState({ speaking: false })

    Speech.speak(note, {
      language: 'en-US',
      onStart: start,
      onDone: complete
    })
  }

  render() {
    const { color, note, speaking } = this.state

    return (
      <View style={styles.container}>
        <ScrollView style={[styles.body, { backgroundColor: color }]}>
          <Text style={styles.bigText}>{note}</Text>
        </ScrollView>
        <View style={[styles.footer, { backgroundColor: color }]}>
          <Btn
            action={this.handleSpeak}
            icon="play"
            text={speaking ? 'Playing...' : 'Play'}
          />
          <Btn action={this.handleShare} icon="share-apple" text="Share" />
          <Btn action={this.handleRefresh} icon="refresh" text="Refresh" />
        </View>
      </View>
    )
  }
}

const fontSize = height < 600 ? 32 : 36
const lineHeight = height < 600 ? 40 : 42
const fontFamily = Platform.OS === 'ios' ? 'System' : 'Roboto'
const fontWeight = Platform.OS === 'ios' ? '600' : '500'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  body: {
    flex: 1
  },
  bigText: {
    color: '#fff',
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    padding: 24,
    textAlign: 'left'
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  btn: {
    flex: 1,
    padding: 16
  },
  btnIcon: {
    alignSelf: 'center',
    color: '#fff'
  },
  btnText: {
    alignSelf: 'center',
    color: '#fff',
    fontFamily,
    fontSize: 11
  }
})

export default HomeScreen
