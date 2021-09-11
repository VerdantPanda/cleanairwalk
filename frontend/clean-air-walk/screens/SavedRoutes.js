import React, { Component,useState } from "react";
import { StyleSheet, Button, Text, View, Picker} from "react-native";

export default function SavedRoutes (){

    const [selectedValue, setSelectedValue] = useState("java");
    return (
      <View style={styles.container}>

      <View style={{flex: 0.5}}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Home to School" value="hs" />
          <Picker.Item label="Work to Home" value="wh" />
        </Picker>
        </View>  
        
        <View style = {{flex: 0.5}}>
        <Button 
            color = 'green'
            
            title={
            "GO!"
            }
            />
        </View>
        
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50'
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

