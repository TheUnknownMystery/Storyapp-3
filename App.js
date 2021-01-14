import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import ReadStoryScreen from './Screens/readStoryScreen'
import WriteStoryScreen from './Screens/writeStoryScreen'

const TabNavigator = createBottomTabNavigator(
  {

    Read: { screen: ReadStoryScreen },
    Write: { screen:WriteStoryScreen }

  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {

        const routeName = navigation.state.routeName;

        // routeName => Screen Which Is Active
        //addingImages to routeName

        if (routeName === 'Read') {
          return (
            <Image
            
            style ={{width: 40,height: 40}}
            source={require('./assets/read.png')}
           
            />
          )
        }
        else if (routeName === 'Write') {
          return (
            <Image
            style ={{width: 40,height: 40}}
            options={{ tabBarBadge: 3 }}
            source={require('./assets/write.png')}
            
            />
          )
        }
      }
    })


  }


)

const AppContainer = createAppContainer(TabNavigator)

export default class App extends React.Component {
  render() {
    return (

      <AppContainer />

    )
  }
}
