import React from 'react'
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'

const AboutScreen = () => (
  <View style={{ flex: 1 }}>
    <ScrollView
      style={styles.body}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
    >
      <Text style={styles.text}>
        Vinobot is a slightly tipsy little robot that generates ridiculous wine
        tasting notes.
      </Text>
      <Text style={styles.text}>
        Has a waiter ever poured you a glass of wine and then waited to hear
        what you think about it? Now you’ll be ready.
      </Text>
      <Text style={styles.text}>
        Too shy to read it aloud? Vinobot can do it for you, though it has a bit
        of a computer-y accent.
      </Text>
      <Text style={styles.text}>🍷😜</Text>
    </ScrollView>
  </View>
)

const { height } = Dimensions.get('window')
const isIos = Platform.OS === 'ios'

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#3F51B5',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 40,
    paddingBottom: 40
  },
  text: {
    color: '#fff',
    fontFamily: isIos ? 'System' : 'Roboto',
    fontSize: height < 600 ? 20 : 24,
    fontWeight: '500',
    marginBottom: 32,
    textAlign: 'left'
  }
})

export default AboutScreen
