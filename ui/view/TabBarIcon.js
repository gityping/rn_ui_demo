import React from 'react';

import {View, Image, StyleSheet } from 'react-native';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#ff0000'}}>
      <Image
        source={this.props.iconImage}
        style={styles.tabBarImage}
      />
      </View>
    );
  }
}

// 定义样式
const styles = StyleSheet.create({
  tabBarImage: {
    width: 22,
    height: 22,
    resizeMode: 'contain'
  }
})