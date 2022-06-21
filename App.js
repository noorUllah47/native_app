import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import Profile from './Profile';
import { NativeBaseProvider, Box } from "native-base";

const Stack = createNativeStackNavigator();
const App = () => {


  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>
<Stack.Screen
name='Home'
component={Home}

>
  
</Stack.Screen>
<Stack.Screen
name='Profile'
component={Profile}

>
  
</Stack.Screen>

      </Stack.Navigator>
      {/* Rest of your app code */}
    </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;