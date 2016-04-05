import React, {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";


var ListItem = React.createClass({

  _onRowPress() {
    //alert(this.props.text);
    alert("list item clicked");
  },
  render() {
    return (
      <TouchableOpacity
        onPress={this._onRowPress}>
        <View style={styles.row}>
          <Text style={styles.info}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
});



var styles = StyleSheet.create({
  row: {
   height: 40,
   justifyContent: 'center',
   padding: 10,
   backgroundColor: 'white',
   borderBottomWidth: 2,
   borderBottomColor: "#F6F6F6",
   alignSelf: "stretch"
 },
  info: {
    fontSize: 16,
    color: "grey"
  },
});

module.exports = ListItem;
