import { Box, View } from 'native-base'
import React from 'react'
import { Image, StyleSheet } from 'react-native'

function Vector() {
  return (
<View>
<Box  mt="10" pt="1"

// backgroundColor="#E5E5E5"
 alignItems="center">

<Image style={styles.img} source={require("./assets/img/vector.png")} />

</Box>
</View>
    )
}

export default Vector
const styles = StyleSheet.create({
img:{
borderRadius:"12"
}

})