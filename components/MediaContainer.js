

import React, { Component } from 'react';
import { Button, Image } from 'react-native-elements';
import { Platform, StyleSheet, Text, View, TextInput, ActivityIndicator,Dimensions } from 'react-native';
import { read } from 'react-native-fs';



type Props = {};
export default class MediaContainer extends Component<Props> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image

          source={{ uri: this.props.parsedImageUrl }}
          style={styles.imageContainer}

          PlaceholderContent={<ActivityIndicator />}
        />

        {/* <View style={{ flexDirection: 'row' }}>
          <View style={styles.buttonDowload} >
            <Button
              // icon={{
              //   name: "arrow-circle-down",
              //   size: 15,
              //   color: "white"
              // }}
              title="Download"
            />
          </View>
          <View style={styles.buttonDowload}>
          <Button
              // icon={{
              //   name: "share-alt",
              //   size: 15,
              //   color: "white"
              // }}
              title="Share"
            /></View>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonDowload: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
