import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  NativeBaseProvider,
  Button,
  Box,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
  Avatar,
  useSafeArea,
} from "native-base";
import Home from "./home";
import Sigin from "./Signin";
import Sigup from "./Signup";
import { StyleSheet } from "react-native";
import BottomNav from "./BottomTabs";
const Drawer = createDrawerNavigator();
function Component(props) {
  return (
   <Home/>
  );
}

const getIcon = (screenName) => {
  switch (screenName) {
    case "home":
      return "email";
    case "Signin":
      return "send";
    case "Signup":
      return "heart";
    case "Archive":
      return "archive";
    case "Trash":
      return "trash-can";
    case "Spam":
      return "alert-circle";
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView   contentContainerStyle={{ paddingTop: 0 }} {...props} safeArea>
      <VStack space="6">
        <Box style={styles.avatar}  backgroundColor="#407AFF"  py="5" px="4">
        <Avatar  bg="indigo.500" source={{
      uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }}>
        JB
      </Avatar>
          <Text mt="10" bold color="white">
         
            Name
          </Text>
          <Text fontSize="14" mt="1" color="white" fontWeight="500">
            john_doe@gmail.com
          </Text>
        </Box>
      
        <VStack divider={<Divider />} space="4">
          <VStack space="3">
            {props.state.routeNames.map((name, index) => (
              <Pressable
                px="5"
                py="3"
                rounded="md"
                bg={
                  index === props.state.index
                    ? "rgba(6, 182, 212, 0.1)"
                    : "transparent"
                }
                onPress={(event) => {
                  props.navigation.navigate(name);
                  props.navigation.closeDrawer();
                }}
              >
                <HStack space="7" alignItems="center">
                  <Icon
                    color={
                      index === props.state.index ? "primary.500" : "gray.500"
                    }
                    size="5"
                    as={<MaterialCommunityIcons name={getIcon(name)} />}
                  />
                  <Text
                    fontWeight="500"
                    color={
                      index === props.state.index ? "primary.500" : "gray.700"
                    }
                  >
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
          <VStack space="5">
            <Text fontWeight="500" fontSize="14" px="5" color="gray.500">
              Labels
            </Text>
            <VStack space="3">
              <Pressable px="5" py="3">
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<MaterialCommunityIcons name="bookmark" />}
                  />
                  <Text color="gray.700" fontWeight="500">
                    Family
                  </Text>
                </HStack>
              </Pressable>
              <Pressable px="5" py="2">
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<MaterialCommunityIcons name="bookmark" />}
                  />
                  <Text color="gray.700" fontWeight="500">
                    Friends
                  </Text>
                </HStack>
              </Pressable>
              <Pressable px="5" py="3">
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<MaterialCommunityIcons name="bookmark" />}
                  />
                  <Text fontWeight="500" color="gray.700">
                    Work
                  </Text>
                </HStack>
              </Pressable>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}
export default function MyDrawer() {
  return (
    <Box safeArea flex={1} Style={{ paddingTop: 0 }}>
      <Drawer.Navigator
    useLegacyImplementation ="false
    "
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="home" component={Component} />
        <Drawer.Screen name="Signin" component={Sigin} />
        <Drawer.Screen name="Signup" component={Sigup} />
        <Drawer.Screen name="Archive" component={BottomNav} />
        <Drawer.Screen name="Trash" component={Component} />
        <Drawer.Screen name="Spam" component={Component} />
      </Drawer.Navigator>
    </Box>
  );
}
const styles = StyleSheet.create({
avatar:{
    flex:1,
}

})