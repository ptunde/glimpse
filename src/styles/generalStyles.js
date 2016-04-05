import React, {
  StyleSheet,
} from "react-native";

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    color: "#FF0000",
    alignItems:"center"
  },
  listView: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  listHeaderWrapper: {
    height: 50,
    backgroundColor: '#D9D9D9',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  listHeader: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 0,
    marginBottom: -7,
    backgroundColor: 'transparent'
  },
});

module.exports = styles;
