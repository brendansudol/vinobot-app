import * as Speech from "expo-speech"
import React, { useState } from "react"
import {
  Dimensions,
  Image,
  ScrollView,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { getRandomColor } from "../util/colors"
import { generateNote } from "../util/note"
import { IconButton } from "./IconButton"

export function Home({ navigation }) {
  const [data, setData] = useState(() => getData())
  const [isSpeaking, setIsSpeaking] = useState(false)

  const handleGoToAbout = () => navigation.navigate("About")

  const handleRefresh = () => setData(getData({ prevColor: data.color }))

  const handleShare = () => {
    Share.share({ message: data.note }, { dialogTitle: "Share wine note" })
      .then((result) => console.log(`SHARED ${JSON.stringify(result)}`))
      .catch(console.warn)
  }

  const handleSpeak = () => {
    if (isSpeaking) return

    Speech.speak(data.note, {
      language: "en-US",
      onStart: () => setIsSpeaking(true),
      onDone: () => setIsSpeaking(false),
    })
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: data.color }]}>
      <StatusBar hidden={true} />
      <ScrollView style={styles.body}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.bigText}>{data.note}</Text>
      </ScrollView>
      <View style={styles.footer}>
        <IconButton icon="emoji-happy" text="about" onPress={handleGoToAbout} />
        <IconButton
          icon="megaphone"
          text={isSpeaking ? "playing" : "play"}
          onPress={handleSpeak}
        />
        <IconButton icon="share" text="share" onPress={handleShare} />
        <IconButton icon="cycle" text="refresh" onPress={handleRefresh} />
      </View>
    </SafeAreaView>
  )
}

function getData({ prevColor } = {}) {
  return {
    color: getRandomColor(prevColor),
    note: generateNote(),
  }
}

// returns [bodyPadding, logoMarginButton, fontSize]
function responsiveStyles(height) {
  if (height > 700) return [30, 20, 35]
  else if (height > 600) return [26, 14, 34]
  else return [24, 12, 28]
}

const windowHeight = Dimensions.get("window").height
const [bodyPadding, logoMarginButton, fontSize] = responsiveStyles(windowHeight)
const lineHeight = parseInt(fontSize * 1.25, 10)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  body: {
    flex: 1,
    padding: bodyPadding,
  },
  logo: {
    marginBottom: logoMarginButton,
    width: 20,
    height: 40,
  },
  bigText: {
    color: "#fff",
    fontFamily: "UbuntuMono",
    fontSize,
    lineHeight,
    textAlign: "left",
  },
  footer: {
    alignItems: "center",
    flexDirection: "row",
  },
})
