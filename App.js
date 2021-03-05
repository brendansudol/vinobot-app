import React, { useEffect } from "react"
import AppLoading from "expo-app-loading"
import { Asset } from "expo-asset"
import * as Font from "expo-font"
import { Entypo } from "@expo/vector-icons"
import { Root } from "./components/Root"

export default function App() {
  const [isReady, setIsReady] = React.useState(false)

  useEffect(() => {
    cacheResources()
      .then(() => setIsReady(true))
      .catch(console.warn)
  }, [])

  return isReady ? <Root /> : <AppLoading />
}

const IMAGES = [require("./assets/logo.png")]
const FONTS = [
  Entypo.font,
  { UbuntuMono: require("./assets/fonts/UbuntuMono-Regular.ttf") },
]

async function cacheResources() {
  const imgsCache = IMAGES.map((img) => Asset.fromModule(img).downloadAsync())
  const fontsCache = FONTS.map((font) => Font.loadAsync(font))
  await Promise.all([...imgsCache, ...fontsCache])
}
