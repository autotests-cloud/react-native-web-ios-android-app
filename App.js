import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import { AppContainer } from './src/AppContainer'

class App extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

AppRegistry.registerComponent('App', () => App);

export default App;