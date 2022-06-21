import React from 'react'
import { Text ,View,SafeAreaView, StyleSheet, TextInput,TouchableOpacity} from 'react-native'
import {Box, Button, Heading, Input, useToast}  from "native-base"
function NBBox(props) {
  return <Box p="5" m="2" borderRadius="md" bg="primary.200" {...props} />;
}
function Profile({navigation}) {

  const toast = useToast();
  return (
    <>

    <SafeAreaView style={styles.safe}>
  <Box alignItems="center">
    <Heading size="lg">Sign in</Heading>
    <Input mx="3" mt="5" borderRadius="12" placeholder="Input" w="75%" maxWidth="300px" />

      <Input mx="3" my="3" borderRadius="12" placeholder="password" type='password' w="75%" maxWidth="300px" />
      </Box> 
  <Box p="5" m="2"  alignItems="center" borderRadius="md">
  <Button onPress={()=>{
           toast.show({
            render: () => {
              return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                    submitted sucessfully
                    </Box>;
            }
          })
          navigation.navigate("Home")
      }} colorScheme="primary">
        <Text style={styles.buttonText}>Submit</Text>
      </Button></Box>
</SafeAreaView>
</>)
}

export default Profile
const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,

    // width:100
    borderRadius:20
  },
  safe:{
    flex:1,
    justifyContent:"center",
    // flexDirection:"row"

  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  header:{
    // flex:1,
    // flexDirection:"row",
    // justifyContent:"center"
  },
  Navbutton:{
    margin: 30,
    width:150,
    backgroundColor: 'forestgreen',
    padding: 20,
    borderRadius: 5,
    marginTop:10,
  },
});