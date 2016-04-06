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

class OutgoingCall extends Component {
  constructor(props) {
    super(props);
  }

  _endCall() {

  }

  _switchMic() {

  }

  _swithWebcam() {
    
  }


  render() {

    return (
      <View style={styles.container}>


        <View style={styles.videopanel}>
          <View style={styles.remotevideo}>
          </View>
          <View style={styles.selfview}>
          </View>
        </View>

        <Text
          style={styles.name}>
          Bruce Wayne
        </Text>
        <Text
          style={styles.title}>
        </Text>

        <View style={styles.button_container}>
          <TouchableOpacity
             style={styles.button}
             onPress={this._swithWebcam}>
             <Image style={styles.icon}
               source={require('image!webcam')}
             />
         </TouchableOpacity>
         <TouchableOpacity
            style={styles.button}
            onPress={this._endCall}>
            <Image style={styles.icon}
              source={require('image!call_end')}
            />
        </TouchableOpacity>
        <TouchableOpacity
           style={styles.button}
           onPress={this._switchMic}>
           <Image style={styles.icon}
             source={require('image!mic_on')}
           />
       </TouchableOpacity>
       </View>
      </View>
    )
  }
};


var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: "center",
    padding: 10,
  },
  name: {
    fontSize: 16,
    alignSelf: "center",
    color: "#404040",
    fontWeight: 'bold',
    marginTop: 20
  },
  title: {
    fontSize: 12,
    alignSelf: "center",
    color: "#404040",
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'auto',
    marginTop: 20,
    padding: 10
  },
  icon: {
    alignSelf: 'center',
    width: 35,
    height: 35,
    resizeMode: 'contain'
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
  selfview: {
    position: 'relative',
    marginTop: -80,
    left: 110,
    width: 80,
    height: 60,
    borderColor: '#007AFF',
    borderWidth: 1,
    alignSelf: 'center',
    backgroundColor: '#000000'
  },
  remotevideo: {
    width: 320,
    height: 240,
    borderColor: '#FF1300',
    borderWidth: 1,
    alignSelf: 'center',
    backgroundColor: '#000000'
  },
  videopanel: {
    marginTop: 10,
    marginBottom: 20
  },
});

module.exports = OutgoingCall;
