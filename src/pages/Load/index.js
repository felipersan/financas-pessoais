import React from 'react';
import {View, Image} from './styles';

import logo from '../../assets/search.gif';

export default function Load() {
  return (
    <View>
      <Image source={logo} />
    </View>
  );
}
