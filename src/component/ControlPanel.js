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

    if (onPressAction === "first") {
      this.props.navigator.pop();
    }
    else {
      //this.props.navigator.push({id: onPressAction});
    }

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
    backgroundColor: '#2D2D2D'
  },
  header: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#A9A9A9',
    paddingTop: 10
  },
  menuItem: {
    height: 50,
    backgroundColor: '#2D2D2D',
    borderBottomWidth: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    borderColor: '#A9A9A9',
  },
  text: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
    lineHeight: 25,
    marginLeft: 10,
  },
});
