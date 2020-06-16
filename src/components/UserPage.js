import React from "react"
import {
    View,
    Text,
    StyleSheet
  } from 'react-native'

import langs from "./../langs"

export const UserPage = ({ user }) => {
    return <View  style={ styles.userContainer }>
            <Text style={ styles.userContent } accessibilityLabel={langs(user.lang, "Private content")} testID={langs(user.lang, "Private content")}>{ langs(user.lang, "private1") }</Text>
            <Text style={ styles.userContent } accessibilityLabel={langs(user.lang, "Private content")} testID={langs(user.lang, "Private content")}>{ langs(user.lang, "private2") }</Text>
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