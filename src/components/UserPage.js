import React from "react"
import {
    View,
    Text,
    StyleSheet
  } from 'react-native'


export const UserPage = ({ user }) => {
    return <View  style={ styles.userContainer }>
            <Text style={ styles.userContent } accessibilityLabel="Private content" testID="Private content">Here is your private content #1</Text>
            <Text style={ styles.userContent } accessibilityLabel="Private content" testID="Private content">and private content #2</Text>
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