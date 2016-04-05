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
  ActivityIndicatorIOS,
} from "react-native";

import { CheckboxField, Checkbox } from 'react-native-checkbox-field';

class PageOne extends Component {
  constructor(props) {
    super(props);

    this.state = {animating: false,
                  isDoctor: false};
    isDoctor = false;
    this._selectCheckbox = this._selectCheckbox.bind(this);
  }



  _onTextPressed() {
    // this.setState({animating: true});
    //
    // var authService = require("./../AuthService");
    // authService.login({
    //   username: this.state.username,
    //   password: this.state.password
    // }, (results) => {
    //     this.setState(results);
    //     this.setState({animating: false});
    //
    //     console.log("test " + this._selectCheckbox.selected);
    //
    //     if (results.success == true) {
    //       if (isDoctor) {
    //         this.props.navigator.push({
    //           id: 'second_doctor'
    //         });
    //       }
    //       else {
    //         this.props.navigator.push({
    //           id: 'second_patient'
    //         });
    //       }
    //     }
    // });
    if (isDoctor) {
      this.props.navigator.push({
        id: 'second_doctor'
      });
    }
    else {
      this.props.navigator.push({
        id: 'second_patient'
      });
    }
  }


  _selectCheckbox() {
      isDoctor = !this.state.selected;
      this.setState({
          selected: !this.state.selected
      });
  }


  render() {
    var errorCtrl = <View/>;

    if (!this.state.success && this.state.badCredentials) {
      errorCtrl = <Text style={styles.error}>
                      That username and password combination did not work
                  </Text>;
    }

    if (!this.state.success && this.state.unknownError) {
      errorCtrl = <Text style={styles.error}>
                      We experienced an unexpected issue
                  </Text>;
    }

    return (
      <View style={styles.container}>
        <Image style={styles.image}
          source={require('image!glimpse_telehealth_logo')}
        />
        <TextInput
          onChangeText={(text) => this.setState({username: text})}
          style={styles.input}
          placeholder="User Name">
        </TextInput>
        <TextInput
          onChangeText={(text) => this.setState({password: text})}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}>
        </TextInput>
        {errorCtrl}
        <View style={styles.containerStyle}>
          <CheckboxField
              value={this.state.isDoctor}
              label={this.state.fieldLabel}
              onSelect={this._selectCheckbox}
              selected={this.state.selected}
              containerStyle={styles.checkBoxcontainerStyle}
              selectedColor='#0a77f7'>
          </CheckboxField>
          <Text
            style={styles.buttonText}>
            Sign in as a doctor
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={this._onTextPressed.bind(this)}>
          <Text
            style={styles.buttonText}>
            Sign In
          </Text>
        </TouchableOpacity>
        <View style={styles.containerFooter}>
          <View
            style={styles.line}>
          </View>
          <Text
            style={styles.newUser}>
            NEW USER
          </Text>
        </View>
        <ActivityIndicatorIOS
          style={styles.indicator}
          animating={this.state.animating}
          size="small">
        </ActivityIndicatorIOS>
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
  welcome: {
    fontSize: 26,
    color: "black",
    alignSelf: "center",
    marginBottom: 60,
  },
  input: {
    height: 50,
    margin: 8,
    marginLeft: 40,
    marginRight: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#48bbec",
    backgroundColor: "#EFEFEF",
    fontSize: 20
  },
  button: {
    width: 100,
    backgroundColor: "#EFEFEF",
    marginTop: 20,
    height: 40,
    justifyContent: "center",
    alignSelf: "flex-end",
    marginRight: 40,
  },
  buttonText: {
    color: "#999999",
    fontSize: 20,
    alignSelf: "center"
  },
  image: {
    width: 210,
    height: 70,
    marginTop: 50,
    marginBottom: 100,
    resizeMode: "contain",
    alignSelf: "center",
  },
  indicator: {
    alignSelf: "center",
    marginTop: 10,
  },
  error: {
    color: "red",
    paddingTop: 10,
    alignSelf: "flex-start",
    marginLeft: 40,
    fontSize: 14,
  },
  containerFooter: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    justifyContent: "flex-end",
    marginBottom: 10,
    marginLeft: 40,
    marginRight: 40,
  },
  line: {
    flex: 1,
    borderTopWidth: 1,
    alignSelf: "stretch",
    borderColor: '#A9A9A9',
  },
  newUser: {
    color: "#0a77f7",
    fontSize: 22,
  },
  containerStyle: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    marginLeft: 40,
    marginRight: 40,
  },
  checkBoxcontainerStyle: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    alignSelf: "flex-start",
    },
});

module.exports = PageOne;
