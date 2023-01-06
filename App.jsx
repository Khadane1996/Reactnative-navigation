import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import FriendsScreen from './screens/FriendsScreen';
import { FriendsContext } from './screens/FriendsContext';

const Stack = createStackNavigator();

// export default function App() {

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      possibleFriends: [
        'Alice',
        'Bob',
        'Sammy',
      ],
      currentFriends: [],
    }
  }

  addFriend = (index) => {
    const {
      currentFriends,
      possibleFriends,
    } = this.state

    // Extraire un ami d'amis possibles
    const addedFriend = possibleFriends.splice(index, 1)

    // Et mettre ami dans Amis actuels
    currentFriends.push(addedFriend)

    // Enfin, mettez à jour l'état de l'application
    this.setState({
      currentFriends,
      possibleFriends,
    })
  }

  render () {
    return (

      <FriendsContext.Provider
      value={
        {
          currentFriends: this.state.currentFriends,
          possibleFriends: this.state.possibleFriends,
          addFriend: this.addFriend
        }
      } 
      >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen 
              name="Friends"
              component={FriendsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FriendsContext.Provider>
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


export default App;