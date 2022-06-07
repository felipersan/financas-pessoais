import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Container, Button} from './style';

import Feather from 'react-native-vector-icons/Feather';

export default function Header({color}) {
  const navigation = useNavigation();

  return (
    <Container>
      <Button
        onPress={() => {
          navigation.toggleDrawer();
        }}>
        <Feather name="menu" size={30} color={color} />
      </Button>
    </Container>
  );
}
