import React, {
  SwitchIOS,
  View,
  Text,
  StyleSheet,
  PropTypes,
  Component,
  TouchableOpacity,
} from "react-native";

export default class ControlPanel extends Component {
   static propTypes = {
      closeDrawer: PropTypes.func.isRequired,
      navigator: PropTypes.object.isRequired
    };

  render(){
    return (
      <View style={styles.container}>
	       <View style={styles.header}>
            <TouchableOpacity
              onPress={this.props.closeDrawer}>
            </TouchableOpacity>
        </View>

        <View>
          {this.renderMenuItem('My Profile', "profile")}
          {this.renderMenuItem('Files', "files")}
          {this.renderMenuItem('Call History', "history")}
          {this.renderMenuItem('Friends', "friends")}
          {this.renderMenuItem('Notifications', "notifications")}
          {this.renderMenuItem('Payment Options', "payment")}
          {this.renderMenuItem('Log Out', 'first')}
        </View>
      </View>
    )
  }

  _goTo(onPressAction) {
    console.log("press " + onPressAction);

    this.props.navigator.push({id: onPressAction});
    this.props.closeDrawer();
  }


  renderMenuItem(text, onPressAction) {
    onPress = () => this._goTo(onPressAction)

    return (
      <TouchableOpacity
        style={styles.menuItem}
        onPress={onPress}>
        <Text
          style={styles.text}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#D9D9D9'
  },
  header: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10
  },
  menuItem: {
    marginBottom: 10,
    height: 60,
    backgroundColor: '#999999',
    justifyContent: "center",
  },
  text: {
    color: 'black',
    fontSize: 20,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
});
