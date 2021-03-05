import React from "react"
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export function About() {
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <StatusBar hidden={true} />
      <ScrollView
        style={styles.body}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <Text style={styles.text}>
          Vinobot is a slightly tipsy little robot that generates ridiculous
          wine tasting notes.
        </Text>
        <Text style={styles.text}>
          Has a waiter ever poured you a glass of wine and then waited to hear
          what you think about it? Now you’ll be ready.
        </Text>
        <Text style={styles.text}>
          Too shy to read it aloud? Vinobot can do it for you, though it has a
          bit of a churlish accent.
        </Text>
        <Text style={styles.text}>🍷😜</Text>
      </ScrollView>
    </View>
  )
}

const windowHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3f51b5",
    flex: 1,
  },
  body: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 40,
    paddingBottom: 40,
  },
  text: {
    color: "#fff",
    fontFamily: "UbuntuMono",
    fontSize: windowHeight < 600 ? 18 : 22,
    fontWeight: "500",
    marginBottom: 32,
    textAlign: "left",
  },
})
