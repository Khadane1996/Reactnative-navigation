import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { FriendsContext } from './FriendsContext';

class FriendsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Ajouter des amis</Text>

        {
          this.context.possibleFriends.map((friend, index) => (
            <Button
              key={ friend }
              title={ `Add ${ friend }` }
              onPress={() =>
                this.context.addFriend(index)
              }
            />
          ))
        }

        <Button
          title="Retour à l'accueil"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}

FriendsScreen.contextType = FriendsContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FriendsScreen;