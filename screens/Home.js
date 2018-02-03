import React, { Component } from 'react'
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
import { Speech } from 'expo'
import { Entypo as Icon } from '@expo/vector-icons'

import { getRandomColor } from '../util/colors'
import generateNote from '../util/note'

const Btn = ({ action, icon, text, size = 28 }) => (
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

  goToAbout = () => {
    const { navigation } = this.props
    navigation.navigate('About')
  }

  handleRefresh = () => {
    this.setState(prev => ({
      color: getRandomColor(prev.color),
      note: generateNote()
    }))
  }

  handleShare = () => {
    const { note } = this.state

    Share.share({ message: note }, { dialogTitle: 'Share wine note' })
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
      <View style={[styles.container, { backgroundColor: color }]}>
        <ScrollView style={styles.body}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={styles.bigText}>{note}</Text>
        </ScrollView>
        <View style={styles.footer}>
          <Btn action={this.goToAbout} icon="emoji-happy" text="about" />
          <Btn
            action={this.handleSpeak}
            icon="megaphone"
            text={speaking ? 'playing...' : 'play'}
          />
          <Btn action={this.handleShare} icon="share" text="share" />
          <Btn action={this.handleRefresh} icon="cycle" text="refresh" />
        </View>
      </View>
    )
  }
}

const { height } = Dimensions.get('window')
const isIos = Platform.OS === 'ios'
const responsiveStyles = h => {
  let [bodyP, imgMb, fs] = [20, 12, 28]
  if (h > 600) [bodyP, imgMb, fs] = [24, 14, 34]
  if (h > 700) [bodyP, imgMb, fs] = [30, 18, 37]
  return { bodyP, imgMb, fs }
}

const { bodyP, imgMb, fs: fontSize } = responsiveStyles(height)
const lineHeight = parseInt(fontSize * 1.33, 10) + (isIos ? 0 : 6)
const [fontFamily, fontWeight] = isIos ? ['System', '700'] : ['Roboto', '500']

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  body: {
    flex: 1,
    padding: bodyP
  },
  logo: {
    marginBottom: imgMb,
    width: 20,
    height: 40
  },
  bigText: {
    color: '#fff',
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
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
    fontSize: 12
  }
})

export default HomeScreen
