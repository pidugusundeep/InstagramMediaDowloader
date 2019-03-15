

import React, { Component } from 'react';
import { Button, Image } from 'react-native-elements';
import { Platform, StyleSheet, Text, View, TextInput, ActivityIndicator } from 'react-native';


import MediaContainer from "./components/MediaContainer"
import Header from "./components/Header"


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
            />
          </View>
        </View>
        <MediaContainer></MediaContainer>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  
  submitUrlButton: {
    flex: 1.5,
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
    color: 'white',
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
