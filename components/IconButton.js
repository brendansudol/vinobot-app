import React from "react"
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"
import { Entypo as Icon } from "@expo/vector-icons"

const SIZE = 28

export function IconButton({ icon, text, onPress }) {
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor="transparent"
      onPress={onPress}
    >
      <View>
        <Icon style={styles.icon} name={icon} size={SIZE} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  icon: {
    alignSelf: "center",
    color: "#fff",
  },
  text: {
    alignSelf: "center",
    color: "#fff",
    fontFamily: "UbuntuMono",
    fontSize: 12,
    marginTop: 10,
  },
})
