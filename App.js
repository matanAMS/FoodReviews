import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootStackScreen from './screens/RootStackScreen';

const App= () => {
  return (
 
    <NavigationContainer>
 <RootStackScreen/>
        {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="SplashScreen" component={SplashScreen} />
          <Drawer.Screen name="SignUpScreen" component={SignUpScreen} />
          <Drawer.Screen name="SignInScreen" component={SignInScreen} /> */}
          
        {/* </Drawer.Navigator> */}
      
    
     
    
    </NavigationContainer>

  );
}

export default App;

