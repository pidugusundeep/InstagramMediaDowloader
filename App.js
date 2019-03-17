

import React, { Component } from 'react';
import { Button, Image } from 'react-native-elements';
import { Platform, StyleSheet, Text, View, TextInput, ActivityIndicator,Linking } from 'react-native';


import MediaContainer from "./components/MediaContainer"
import Header from "./components/Header"
import DownloadFIle from "./components/downloadFIle"

var DomParser = require('react-native-html-parser').DOMParser


type Props = {};

export default class App extends Component<Props> {

  constructor(props) {
    super(props)

    this.state = {
      url: '',
      imageUrl: 'https://www.instagram.com/p/BvHSFpll-HY/?utm_source=ig_web_copy_link',
      imageName: '',
    }
  }


  findMediaUrl(externalURL) {
    me = this;
    return fetch(externalURL).then(function (res) {
      return res.text();
    }).then(function (html) {

      let doc = new DomParser().parseFromString(html, 'text/html')

      if (doc.getElementsByTagName('meta')[9].attributes[0].nodeValue == "og:image") {
        me.setState({ imageUrl: doc.getElementsByTagName('meta')[9].attributes[1].nodeValue })
        // debugger
        me.setState({ imageName: me.state.url.split('/')[4] + ".jpg" })

      }
      else {
        alert("please try later")
      }

    });


    alert(externalURL)
  }

  render() {


    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Media Dowloader</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.urlInputText} >
            <TextInput placeholder="Paste Media URL Here" onChangeText={(url) => this.setState({ url })} value={this.state.url} ></TextInput>
          </View>
          <View style={styles.submitUrlButton} >
            <Button
              icon={{
                name: "search",
                size: 30,
                color: "white",
              }}
              onPress={() => this.findMediaUrl(this.state.url)}
            />
          </View>
        </View>
        <MediaContainer parsedImageUrl={this.state.imageUrl}></MediaContainer>
        <DownloadFIle parsedImageUrl={this.state.imageUrl} parsedImageName={this.state.imageName} ></DownloadFIle>
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
