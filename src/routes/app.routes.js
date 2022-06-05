import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../pages/Home';
import Transactions from '../pages/Transactions';
import Profile from '../pages/Profile';
import Payments from '../pages/Payments';
import MyCards from '../pages/MyCards';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator
      drawerStyle={{borderTopEndRadius: 20, borderBottomEndRadius: 20}}
      drawerContentOptions={{
        activeBackgroundColor: '#F2F4F8',
        activeTintColor: '#66b0ef',
        inactiveTintColor: '#66b0ef',
      }}>
      <AppDrawer.Screen name="Home" component={Home} />
      <AppDrawer.Screen name="Profile" component={Profile} />
      <AppDrawer.Screen name="Transactions" component={Transactions} />
      <AppDrawer.Screen name="Payments" component={Payments} />
      <AppDrawer.Screen name="MyCards" component={MyCards} />
    </AppDrawer.Navigator>
  );
}

export default AppRoutes;
