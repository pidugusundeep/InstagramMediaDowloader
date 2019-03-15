

import React, { Component } from 'react';
import { Button, Image } from 'react-native-elements';
import { Platform, StyleSheet, Text, View, TextInput, ActivityIndicator } from 'react-native';

type Props = {};
export default class MediaContainer extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: "https://instagram.fmaa6-1.fna.fbcdn.net/vp/38184f246969b45106baf19c8dbae3dd/5D093FA4/t51.2885-15/e35/53010829_367081094019139_6301776900701318588_n.jpg?_nc_ht=instagram.fmaa6-1.fna.fbcdn.net" }}
          style={styles.imageContainer}
          PlaceholderContent={<ActivityIndicator />}
        />

        <View style={{ flexDirection: 'row' }}>
          <View style={styles.buttonDowload} >
            <Button
              icon={{
                name: "arrow-circle-down",
                size: 15,
                color: "white"
              }}
              title="Download"
            />
          </View>
          <View style={styles.buttonDowload}>
          <Button
              icon={{
                name: "share-alt",
                size: 15,
                color: "white"
              }}
              title="Share"
            /></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonDowload: {
    width: '50%',
    // height: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 10,
    width: 395, height: 450
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
