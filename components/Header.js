

import React, { Component } from 'react';
import { Button, Image } from 'react-native-elements';
import { Platform, StyleSheet, Text, View, TextInput, ActivityIndicator } from 'react-native';

type Props = {};
export default class Header extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
   
});
