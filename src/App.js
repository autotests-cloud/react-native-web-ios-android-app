/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Platform
} from 'react-native';

import { 
  useDispatch, useSelector
} from 'react-redux'

import { getAuth, postLogout } from "./reducers/auth"

import { LangComponent } from "./components/LangComponent"
import { LoginPage } from "./components/LoginPage"
import { UserPage } from "./components/UserPage"


export const App: () => React$Node = () => {
  
  const dispatch = useDispatch()
  const { lang, translations } = useSelector(state => state.app)
  const { user } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(getAuth())
  }, [ dispatch ])

  useEffect(() => {
    if(Platform.OS === "web") window.location.hash = lang
  }, [ lang ])

  useEffect(() => {
    if(Platform.OS === "web") document.querySelector("title").innerText = user ? "Main page" : "Login page"
  }, [ user ])

  const logoutHandler = () => {
    dispatch(postLogout())
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={ styles.appContainer }>
          <View style={styles.appHeader}>
            <Text style={styles.appHeaderText} accessibilityLabel={translations["Header label"]} testID={translations["Header label"]}>{ user ? `${translations["Hello"]}, ${ user.email }!` : translations["Not authorized"]}</Text></View>
            {user 
              ? <TouchableOpacity accessibilityLabel={translations["Logout"]} testID={translations["Logout"]} style={ styles.logout } onPress={logoutHandler}>
                  <Text style={ styles.logoutText }>{ translations["logout"]} </Text>
                </TouchableOpacity>
              : <LangComponent />}
            <View style={styles.appContent} accessibilityLabel={translations["Content block"]} testID={translations["Content block"]}>
              { user 
                ? <UserPage user={user}/> 
                : <LoginPage />
              }
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
    height: "100%"
  },
  appContainer: {
    flex: 1,
    textAlign: "center",
    flexDirection: "column",
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`
  },
  appContent: {
    width: 310,
    marginTop: 32,
    flexWrap: "wrap",
    flexDirection: "column",
    alignSelf: "center",
  },
  appHeader: {
    display: "flex",
    height: 60,
    alignSelf: "stretch",
    textAlign: "center",
    backgroundColor: "#282c34",
    textAlignVertical: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  appHeaderText: {
    fontSize: 22,
    color: "white",
  },
  logout: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 60,
    fontSize: 16,
    borderWidth: 0,
    backgroundColor: "rgb(33, 150, 243)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: 24
  },
  logoutText: {
    color: "white",
  }
})