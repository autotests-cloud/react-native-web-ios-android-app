import React from "react"
import {
    View,
    Text,
    StyleSheet
  } from 'react-native'

import { useSelector } from 'react-redux'

export const UserPage = () => {
    
    const { translations } = useSelector(state => state.app)

    return <View  style={ styles.userContainer }>
            <Text style={ styles.userContent } accessibilityLabel={translations["Private content"]} testID={translations["Private content"]}>{ translations["private1"] }</Text>
            <Text style={ styles.userContent } accessibilityLabel={translations["Private content"]} testID={translations["Private content"]}>{ translations["private2"] }</Text>
        </View>
}

const styles = StyleSheet.create({
  userContainer: {
    alignSelf: "stretch",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    width: 310
  },
  userContent: {
    alignSelf: "stretch",
    textAlign: "center",
  }
})