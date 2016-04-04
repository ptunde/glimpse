"use-strict"

import React, {
  Text,
  TextInput,
  View,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Component,
} from "react-native";

class OtherPage extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <View style={styles.container}>
        <Text
          style={styles.otherScreen}>
          Other Screen
        </Text>
      </View>
    )
  }
};


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: "flex-end",
  },
  otherScreen: {
    color: "#0a77f7",
    fontSize: 22,
  },
});

module.exports = OtherPage;
