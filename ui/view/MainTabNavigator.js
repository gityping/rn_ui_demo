import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import TabBarIcon from '../view/TabBarIcon'
import HomeScreen from '../HomeScreen'
import MineScreen from '../MineScreen'
import NewsScreen from '../NewsScreen'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  }, {
    mode: 'card',
    initialRouteName: 'Home',
    navigationOptions: {
      gesturesEnabled: true,
    },
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: '首页',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused = {focused}
        iconImage = {
          focused ? require('../assets/images/tab_ico_charge_selected.png') : require('../assets/images/tab_ico_charge_normal.png')
        }
      />
    ),
    tabBarVisible: navigation.state.index == 0
  }
};

const MineStack = createStackNavigator(
  {
    Mine: MineScreen,
  }, {
    mode: 'card',
    initialRouteName: 'Mine',
    navigationOptions: {
      gesturesEnabled: true,
    },
  }
);

MineStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: '我的',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused = {focused}
        iconImage = {
          focused ? require('../assets/images/tab_ico_mine_selected.png') : require('../assets/images/tab_ico_mine_normal.png')
        }
      />
    ),
    tabBarVisible: navigation.state.index == 0
  }
}

const NewsStack = createStackNavigator(
  {
    News: NewsScreen,
  }, {
    mode: 'modal',
    initialRouteName: 'News',
    navigationOptions: {
      gesturesEnabled: true
    }
  }
)

NewsStack.navigationOptions = ({navigation}) => ({
  tabBarLabel: '新闻',
  tabBarIcon: ({ focused }) => (
    // <TouchableOpacity style={styles.scanTabItem} onPress={() => {navigation.push('Scan')}}>
    //   <Image source={require('../assets/images/tab_btn_bigcharge.png')} style={styles.scanImage}/>
    // </TouchableOpacity>
    <TabBarIcon
      focused = {focused}
      iconImage = {
        focused ? require('../assets/images/tab_ico_mine_selected.png') : require('../assets/images/tab_ico_mine_normal.png')
      }
    />
  )
})

export default createBottomTabNavigator({
  HomeStack,
  NewsStack,
  MineStack,
});

// 定义样式
const styles = StyleSheet.create({
  scanImage: {
    width: 44,
    height: 30,
    resizeMode: 'contain',
    marginTop: 10,
  },
  scanTabItem: {
    width: '100%',
    height: 49,
    marginTop: 16,
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
})
