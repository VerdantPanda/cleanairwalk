import React, { Component } from "react";
import { StyleSheet, Button, Text, View} from "react-native";
import { NavigationContext } from "react-navigation";

var state = { airQualityIndex: 15};

export default function Home ({navigation}){
  
  
  const savedRoutesHandler = () => {
    navigation.navigate('SavedRoutes')
  }

  const newRoutesHandler = () => {
      navigation.navigate('NewRoutes')
  }
  
    return (
        <View style={styles.container}>
        <View style = {{flex: 0.1}}>
            <Text style={styles.title}>
            Welcome to Clean Air Walk shit!
            </Text>
        </View>
        
        <View style = {{flex: 0.1}}>
            <Text style={styles.airquality}>
            Air Quality Index : {state.airQualityIndex}
            </Text>
        </View>
        <View style = {{flex: 0.1}}>
        <Button 
            color = 'green'
            onPress={
                newRoutesHandler
            }
            title={
            "New Route"
            }
            />
        </View>

        <View style = {{flex: 0.1}}>
        <Button 
            color = 'green'
            onPress={
            savedRoutesHandler
            }
            title={
            "Saved Routes"
            }
            />
        </View> 
        </View>
    )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  title: {
    fontFamily: 'Cochin',
    fontSize: 30
  },

  airquality: {
    fontFamily: 'Cochin',
    fontSize: 20
  }
})




