import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import firebase from 'firebase';
import ProfileScreen from './screens/ProfileScreen';
import OrderScreen from './screens/OrderScreen';
import StatusScreen from './screens/StatusScreen';
import InputScreen from './screens/InputScreen';
import MapScreen from './screens/MapScreen';
import SignUpForm from './screens/SignUpForm';
import SignInForm from './screens/SignInForm';


const TabNav = TabNavigator({
  Order: {
    screen: OrderScreen,
  },
  Status: {
    screen: StatusScreen,
  },
  Profile: {
    screen: ProfileScreen
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#FFD500',
    inactiveTintColor: 'lightgray',
    labelStyle: {
      fontSize: 10,
    },
    style: {
      backgroundColor: '#262626',
      borderTopWidth: 1,
      borderTopColor: '#262626'
    },
  }
});

const StackNav = StackNavigator({
  TabNav: {
    screen: TabNav,
  },
  Input: {
    screen: InputScreen,
  },
  MapScreen: {
    screen: MapScreen,
  },
});

export default class App extends React.Component {

  componentDidMount() {
    this.firebaseInitialize();

    console.log('Start')
  }

  firebaseInitialize() {
    var config = {
     apiKey: "AIzaSyAZzqPWgp3AfMfnYOS9_TPofwfBT716Qrk",
     authDomain: "drink-and-drive.firebaseapp.com",
     databaseURL: "https://drink-and-drive.firebaseio.com",
     projectId: "drink-and-drive",
     storageBucket: "drink-and-drive.appspot.com",
     messagingSenderId: "943601859777"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <StackNav />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
