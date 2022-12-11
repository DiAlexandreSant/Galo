import React from 'react'
import { Linking, StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function About() {
  return (
    <View style={styles.container}>
      
    </View>
    
  )
}

const styles = StyleSheet.create({

    texto:{
        fontWeight:"bold",
        fontSize:20,
        color:"blue",
        
    },

    container:{
      flex:1,
      padding:15,
      justifyContent:'center'
    },

    git:{
      fontSize:50,
      alignSelf:'center',
      color:'blue',
    }
})

export default About