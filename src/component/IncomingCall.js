'use-strict'

import React, {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Component,
} from 'react-native';

class IncomingCall extends Component {
  constructor(props) {
    super(props);
  }

  _answer() {

  }

  _dismiss() {

  }


  render() {

    return (
      <View style={styles.container}>

          <View style={styles.pictureName}>
            <Image style={styles.profilePic}
              source={require('image!adam_parker')}
            />
            <View style={styles.names}>
              <Text
                style={styles.title}>
                John Doe
              </Text>
              <Text
                style={styles.message}>
                Incoming call
              </Text>
            </View>

        </View>

        <View style={styles.button_container}>
          <TouchableOpacity
             style={styles.buttonLeft}
             onPress={this._dismiss}>
             <Image style={styles.iconDismiss}
               source={require('image!ic_decline_call')}
             />
             <Text
               style={styles.buttonText}>
               Schedule
             </Text>
         </TouchableOpacity>

         <TouchableOpacity
            style={styles.buttonRight}
            onPress={this._answer}>
            <Image style={styles.icon}
              source={require('image!ic_call_end')}
            />
            <Text
              style={styles.buttonText}>
              Answer
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
    alignItems: 'flex-start',
    padding: 5
  },
  pictureName: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  names: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10
  },
  button_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 10
  },
  buttonLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'auto',
    backgroundColor: '#FFFFFF'
  },
  buttonRight: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 40,
    alignSelf: 'auto',
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start'
  },
  buttonText: {
    fontSize: 14,
    alignSelf: 'flex-start',
    color: '#0a77f7',
    marginLeft: 2
  },
  title: {
    fontSize: 14,
    color: '#404040',
    fontWeight: 'bold'
  },
  message: {
    fontSize: 12,
    color: '#404040',
    marginTop: 4
  },
  iconDismiss: {
    alignSelf: 'flex-start',
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  icon: {
    alignSelf: 'flex-start',
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  profilePic: {
    alignSelf: 'flex-start',
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginLeft: 10
  },
});

module.exports = IncomingCall;
