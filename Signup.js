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
function NBBox(props) {
  return <Box p="5" m="2" borderRadius="md" bg="primary.200" {...props} />;
}
function Sigup({ navigation }) {
  const toast = useToast();
  const [show, setShow] = React.useState(false);
  return (
    <>
      <SafeAreaView style={styles.safe}>
        <Box alignItems="center">
          <Image source={require("./assets/img/dollar.png")} />
          <Heading color="white" size="lg">
            Sign in
          </Heading>
        
          <Input
            mx="3"
            mt="1"
            borderRadius="12"
            placeholder="First Name"
            w="75%"
            maxWidth="300px"
          />
           <Input
            mx="3"
            mt="3"

            borderRadius="12"
            placeholder="Last Name"
            w="75%"
            maxWidth="300px"
          />
  <Input
          mx="3"
          mt="3"
          borderRadius="12"
          placeholder="Phone number"
          type="number"
          w="75%"
          maxWidth="300px"
        />
          <Input
            mx="3"
            mt="3"
            borderRadius="12"
            placeholder="Email"
            w="75%"
            maxWidth="300px"
            type="email"
          />
          <Input
            mx="3"
            mt="3"
            borderRadius="12"
            placeholder="Enter your password"
            type="password"
            w="75%"
            maxWidth="300px"
          />   
           <Input
            mx="3"
            mt="3"
            borderRadius="12"
            placeholder="Country"
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
            <Text style={styles.buttonText}>Sign Up </Text>
          </Button>
          
        
        </Box>
        <Box  alignItems="center" borderRadius="md">
        <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
             Already have an account{" "}
            </Text>
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href=""
          onPress={() => {
            navigation.navigate("Signin");

          }}
          >
              Sign In
            </Link>   
        </Box>
      </SafeAreaView>
    </>
  );
}

export default Sigup;
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
