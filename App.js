import * as React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./home";
import { NativeBaseProvider, Box,  } from "native-base";
import Sigin from "./Signin";
import Sigup from "./Signup";
import AppDrawer from "./Drawer";
import MyDrawer from "./Drawer";
import BottomNav from "./BottomTabs";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NativeBaseProvider >
      <NavigationContainer>
        <MyDrawer/>
      </NavigationContainer>
      <NavigationContainer>

        {/* <Stack.Navigator> */}
          {/* <Stack.Screen name="Home" component={Home}></Stack.Screen> */}
          {/* <Stack.Screen name="Draw" component={MyDrawer}></Stack.Screen> */}

          {/* <Stack.Screen name="Signin" component={Sigin}></Stack.Screen>
          <Stack.Screen name="Signup" component={Sigup}></Stack.Screen> */}
        {/* </Stack.Navigator> */}
        {/* Rest of your app code */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
