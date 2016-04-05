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
import ListItem from "./../component/ListItem";
import ControlPanel from "./../component/ControlPanel";
import Drawer from "react-native-drawer";
import generalStyles from "./../styles/generalStyles";

var HomePatient = React.createClass ({
  _goBack() {
    this.props.navigator.pop();
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
      dataSource: ds.cloneWithRows(['William Adama', 'Barry Allen', 'Wedge Antilles', 'Padme Amidala', 'Alyssa Aschorft',
                                    'Petry Baelish', 'Robert Baratheon']),
    };
  },
  _renderRow(rowData) {
    return <ListItem text={rowData}/>;
  },
  _callDoctor() {

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
        content={<ControlPanel
                    closeDrawer={this.closeDrawer}
                    navigator={this.props.navigator} />  }
        openDrawerOffset={100}
        styles={{main: {shadowColor: "#000000", shadowOpacity: 0.4, shadowRadius: 3}}}
        tweenHandler={Drawer.tweenPresets.parallax}
        >
        <View style={styles.container}>
          <Image style={styles.logo}
            source={require('image!glimpse_telehealth_patient_logo')}
          />
          <View style={generalStyles.listHeaderWrapper}>
            <Text style={generalStyles.listHeader}>
              LAST CALLS
            </Text>
          </View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            contentContainerStyle={generalStyles.listView}
          />
          <TouchableOpacity
             style={styles.buttonCall}
             onPress={this._callDoctor}>
             <Text
               style={styles.call_doctor}>
               Call a doctor
             </Text>
         </TouchableOpacity>

        </View>
       </Drawer>
    )
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "stretch",
  },
  welcome: {
    fontSize: 20,
    color: "black",
    alignSelf:"center"
  },
  backContainer: {
    width: 170,
    height: 40,
    marginTop: 10,
    backgroundColor: "#009DDD",
    justifyContent: "center",
  },
  call_doctor: {
    fontSize: 18,
    color: "blue",
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
    alignSelf: "flex-end",
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  buttonCall: {
    width: 170,
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#009DDD",
    justifyContent: "center",
    alignSelf: "center",
  },
  call_doctor: {
    fontSize: 18,
    color: "white",
    alignSelf:"center"
  },
});

module.exports = HomePatient;
