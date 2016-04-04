import React, {
  Component,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  BackAndroid,
  Image,
  ListView,
} from "react-native";
import ListItem from "./ListItem";
import ControlPanel from "./../component/ControlPanel"
import Drawer from "react-native-drawer"

var PageTwo = React.createClass ({
  _goBack() {
    this.props.navigator.pop();
  },

  _callDoctor() {

  },

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      this._goBack();
      return true;
    });
  },
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['William Adama', 'Barry Allen']),
    };
  },
  _renderRow(rowData) {
    return <ListItem text={rowData}/>;
  },
  closeDrawer() {
   this._drawer.close()
 },
 openDrawer() {
   this._drawer.open()
 },

  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="static"
        content={<ControlPanel closeDrawer={this.closeDrawer}
                                navigator={this.props.navigator}  />  }
        openDrawerOffset={100}
        styles={{main: {shadowColor: "#000000", shadowOpacity: 0.4, shadowRadius: 3}}}
        tweenHandler={Drawer.tweenPresets.parallax}
        >
        <View style={styles.container}>
          <Image style={styles.logo}
            source={require('image!glimpse_telehealth_patient_logo')}
          />

          <TouchableOpacity
            style={styles.buttonCall}
            onPress={this._callDoctor}>
            <Text
              style={styles.call_doctor}>
              Call a doctor
            </Text>
          </TouchableOpacity>

          <View style={styles.lastContainer}>
            <Text style={styles.lastCalls}>
              Last Calls
            </Text>
            <ListView
              style={styles.listLastCalls}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
            />
          </View>
        </View>
       </Drawer>
    )
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },

  lastContainer: {
    flex: 1,
    alignSelf:"flex-start",
    alignItems: "flex-start",
    marginTop: 30,
  },
  lastCalls: {
    fontSize: 20,
    color: "black",
    alignSelf:"flex-start",
  },
  listLastCalls: {
    marginTop: 5,
    alignSelf:"flex-start",
  },
  buttonCall: {
    width: 170,
    height: 40,
    marginTop: 30,
    backgroundColor: "#009DDD",
    justifyContent: "center",
  },
  call_doctor: {
    fontSize: 18,
    color: "white",
    alignSelf:"center"
  },
  input: {
    fontSize: 20,
    color: "grey",
    borderColor: 'grey',
    borderWidth: 1,
    margin: 2,
    height:50,
  },
  logo: {
    width: 100,
    height: 50,
    marginTop: 10,
    resizeMode: "contain",
    alignSelf: "flex-end",
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 20,
    resizeMode: "contain",
    alignSelf: "flex-end",
  },
});

module.exports = PageTwo;
