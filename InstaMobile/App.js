/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, Text, View, FlatList } from 'react-native';

const width = Dimensions.get('screen').width

type Props = {};
export default class App extends Component<Props> {
  render() {
    const fotoList = [
      {
        id: 1,
        usuario: 'richard'
      },
      {
        id: 2,
        usuario: 'albert'
      },
      {
        id: 3,
        usuario: 'fernand'
      }
    ]


    return (
      <FlatList
        keyExtractor={item => item.id}
        data={fotoList}
        renderItem={({ item }) =>
          <View>
            <Text style={styles.instructions}>{item.usuario}</Text>
            <Image style={{ width, height: width }} source={require('../InstaMobile/resource/img/background.png')}></Image>
          </View>
        }>

      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 20
  },
});
