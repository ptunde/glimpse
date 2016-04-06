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
  Picker,
} from "react-native";

class OtherPage extends Component {
  constructor(props) {
    super(props);

      this.state = {language: 'Java'};
  }

  _sendConfirmation() {

  }

  _cancel() {

  }


  render() {

    return (
      <View style={styles.container}>
        <Text
          style={styles.title}>
          Your call has been declined
        </Text>
        <Text
          style={styles.message}>
          And rescheduled for Tuesday April 24th between 2pm - 3pm
        </Text>
        <View style={styles.button_container}>
          <TouchableOpacity
             style={styles.buttonLeft}
             onPress={this._cancel}>
             <Text
               style={styles.buttonText}>
               Decline
             </Text>
         </TouchableOpacity>
         <TouchableOpacity
            style={styles.buttonRight}
            onPress={this._sendConfirmation}>
            <Text
              style={styles.buttonText}>
              Accept
            </Text>
        </TouchableOpacity>
      </View>
      </View>
    )
  }
};


var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
  button_container: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "stretch",
  },
  buttonLeft: {
    marginLeft: 10,
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  buttonRight: {
    width: 140,
    marginLeft: 40,
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  buttonText: {
    fontSize: 12,
    alignSelf: "center",
    color: "#0a77f7",
    fontWeight: 'bold'
  },
  title: {
    fontSize: 16,
    alignItems: "center",
    color: "#404040",
    fontWeight: 'bold',
    marginTop: 10,
  },
  message: {
    fontSize: 14,
    alignItems: "center",
    color: "#404040",
    marginTop: 20,
  }
});

module.exports = OtherPage;
