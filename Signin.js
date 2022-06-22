import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Stack,
  Icon,
  Image,
} from "react-native";
import { Box, Button, Heading, Input, Link, useToast } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import Vector from "./Vector";
function NBBox(props) {
  return <Box p="5" m="2" borderRadius="md" bg="primary.200" {...props} />;
}
function Sigin({ navigation }) {
  const toast = useToast();
  const [show, setShow] = React.useState(false);
  return (
    <>
      <SafeAreaView style={styles.safe}>
        <Box alignItems="center">
          <Image source={require("./assets/img/message.png")} />
          <Heading color="white" size="lg">
            Sign in
          </Heading>
        
          <Input
            mx="3"
            mt="1"
            borderRadius="12"
            placeholder="Enter Your Email"
            w="75%"
            maxWidth="300px"
          />

          <Input
            mx="3"
            my="3"
            borderRadius="12"
            placeholder="Enter your password"
            type="password"
            w="75%"
            maxWidth="300px"
          />
        </Box>
        <Box p="2" m="2" alignItems="center" borderRadius="md">
          <Button
            backgroundColor="#407AFF"
            width={300}
            borderRadius="30"
            onPress={() => {
              toast.show({
                render: () => {
                  return (
                    <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                      submitted sucessfully
                    </Box>
                  );
                },
              });
              navigation.navigate("Home");
            }}
            colorScheme="primary"
          >
            <Text style={styles.buttonText}>Sign In </Text>
          </Button>
        </Box>
        <Box  alignItems="center" borderRadius="md">
          {/* <Button
            // backgroundColor="#91F2C2"
            width={300}
            borderRadius="30"
            onPress={() => {
              toast.show({
                render: () => {
                  return (
                    <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                      submitted sucessfully
                    </Box>
                  );
                },
              });
              navigation.navigate("Signup");
            }}
            colorScheme="primary"
          >
            <Text style={styles.buttonText}>Sign Up </Text>
          </Button> */}
           <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href=""
          onPress={() => {
            navigation.navigate("Signup");


          }}
          >
              Sign Up
            </Link>
        </Box>
        <Vector/>
      </SafeAreaView>
    </>
  );
}

export default Sigin;
const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,

    // width:100
    borderRadius: 20,
  },
  safe: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    // flexDirection:"row"
  },
  buttonText: {
    fontSize: 20,

    color: "#fff",
  },
  header: {
    // flex:1,
    // flexDirection:"row",
    // justifyContent:"center"
  },
  Navbutton: {
    margin: 30,
    width: 150,
    backgroundColor: "forestgreen",
    padding: 20,
    borderRadius: 5,
    marginTop: 10,
  },
});
