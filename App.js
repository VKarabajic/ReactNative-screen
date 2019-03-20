import React from "react";
import { StyleSheet, Text, View, TouchableHighlight, Buto } from "react-native";
import Expo from "expo";
import { createStackNavigator } from "react-navigation";
import { Constants } from "expo";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.pressProfile}>
          <Text onPress={() => navigate("Profile")}>Navigate to Profile</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.pressHome}>
          <Text onPress={() => navigate("Home")}>Navigate to Home</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const NavigationApp = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen }
  },
  {
    navigationOptions: {
      headerStyle: {
        marginTop: Constants.statusBarHeight
      }
    }
  }
);

export default class App extends React.Component {
  render() {
    return <NavigationApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  pressHome: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "skyblue"
  },
  pressProfile: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "lightsalmon"
  }
});
