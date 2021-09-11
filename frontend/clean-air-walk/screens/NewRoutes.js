import React, { Component } from "react";
import { StyleSheet, Button, Text, View, Picker} from "react-native";

export default function NewRoutes (){

    return (
        <View style={styles.container}>
        <Text style={styles.title}>
            New Routes page
        </Text>
      </View>
    );
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

