import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Initial from '../pages/SignIn';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignIn/SingUp';

const AuthStack = createStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Initial"
        component={Initial}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
