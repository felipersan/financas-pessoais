import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';

import {AuthContext} from '../../contexts/auth';

export default function Home() {
  const {user, SignOut} = useContext(AuthContext);
  return (
    <View>
      <Text>Home</Text>
      <Text>{user.email}</Text>
      <Text>{user.uid}</Text>
      <Text>{user.name}</Text>
      <Button
        title="deslogar"
        onPress={() => {
          SignOut();
        }}
      />
    </View>
  );
}
