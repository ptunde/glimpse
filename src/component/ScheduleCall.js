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

const DropDown = require('react-native-dropdown');
const {
  Select,
  Option,
  OptionList,
  updatePosition
} = DropDown;

class OtherPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canada: ''
    };

  }

  componentDidMount() {
   updatePosition(this.refs['SELECT1']);
   updatePosition(this.refs['OPTIONLIST']);
 }

 _getOptionList() {
  return this.refs['OPTIONLIST'];
}

  _sendConfirmation() {

  }

  _cancel() {

  }

  _canada(province) {

    this.setState({
      ...this.state,
      canada: province
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <Text
          style={styles.title}>
          Schedule this call for an other time
        </Text>
        <Text
          style={styles.message}>
          Choose a time slot
        </Text>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20 }}>

          <Text>  Tuesday April 6th between: {this.state.canada}</Text>

          <Select
            width={250}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Select a time interval ..."
            onSelect={this._canada.bind(this)}>
            <Option>2pm-3pm</Option>
            <Option>3pm-4pm</Option>
            <Option>4pm-5pm</Option>
            <Option>5pm-6pm</Option>
            <Option>6pm-7pm</Option>
            <Option>7pm-8pm</Option>
          </Select>


          <OptionList ref="OPTIONLIST"/>
      </View>

        <View style={styles.button_container}>
          <TouchableOpacity
             style={styles.buttonLeft}
             onPress={this._cancel}>
             <Text
               style={styles.buttonText}>
               Cancel
             </Text>
         </TouchableOpacity>
         <TouchableOpacity
            style={styles.buttonRight}
            onPress={this._sendConfirmation}>
            <Text
              style={styles.buttonText}>
              Send Confirmation
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
    paddingHorizontal: 20,
  },
  button_container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 40,
    alignItems: "stretch",
  },
  buttonLeft: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  buttonRight: {
    flex: 1,
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
    marginTop: 30,
    fontWeight: 'bold',
  },
  messageSmall: {
    fontSize: 10,
    alignItems: "center",
    color: "#404040",
    marginTop: 2,
  },
  otherScreen: {
    color: "#0a77f7",
    fontSize: 22,
  },
});

module.exports = OtherPage;
