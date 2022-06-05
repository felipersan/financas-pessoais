import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import {AuthContext} from '../contexts/auth';
import Load from '../pages/Load';

function Routes() {
  const {signed, load} = useContext(AuthContext);

  if (load) {
    return <Load />;
  } else {
    return signed ? <AppRoutes /> : <AuthRoutes />;
  }
}

export default Routes;
