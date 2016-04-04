'use strict';


import React,
{
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Navigator,
} from "react-native";

import PageOne from "./SignInScreen"
import HomeDoctor from "./HomeScreenDoctor"
import HomePatient from "./HomeScreenPatient"
import OtherScreen from "./OtherPage"


let sceneConfig = Navigator.SceneConfigs.FloatFromRight;
sceneConfig.gestures = {};

var _navigator;
var App = React.createClass({
  render() {
    return (
      <Navigator
        style={styles.nav}
        initialRoute={{id: 'first'}}
        renderScene={this.navigatorRenderScene}
        configureScene={(route) => ({
          ...Navigator.SceneConfigs.HorizontalSwipeJump,
          gestures: false
        })}/>
    );
  },

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'first':
        return (<PageOne navigator={navigator} title="Sign In"/>);
      case 'second_doctor':
        return (<HomeDoctor navigator={navigator} title="HomeDoctor"/>);
      case 'second_patient':
          return (<HomePatient navigator={navigator} title="HomePatient"/>);
    }

    return (<OtherScreen navigator={navigator} title="HomePatient"/>);
  }
});



var styles = StyleSheet.create({
  navWrap: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    marginTop: 70
  },
  nav: {
    marginTop: 20,
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
});


module.exports = App;
