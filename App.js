/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Media Dowloader</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.urlInputText} >
            <TextInput placeholder="Paste Media URL Here"></TextInput>
          </View>
          <View style={styles.submitUrlButton} >
            <Button
              icon={{
                name: "search",
                size: 30,
                color: "white",
               
              }}
              title=""
              // onPress={onPressLearnMore}
            />
          </View>
        </View>

        {/* <Text style={styles.instructions}>To get started, edit App.js</Text> */}
        {/* <Text style={styles.instructions}>{instructions}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  submitUrlButton: {
    flex:1.5,
    marginTop: 10,
    marginLeft: -5,
    marginRight: 5,
    marginBottom: 10,
  },
  urlInputText: {
    flex: 8,
    margin: 10,
    backgroundColor: 'powderblue'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    color:'white',
    fontSize: 35,
    textAlign: 'center',
    backgroundColor: '#346ac1',
    padding: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
