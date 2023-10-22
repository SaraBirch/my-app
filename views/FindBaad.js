import {TouchableOpacity, Text, View} from "react-native";
import * as React from "react";
import { globalStyles } from "../GlobalStyles/GlobalStyles.js";

// Function for navigating to a specific route using the provided 'navigation' object
const navController = (navigation, route) =>{
    navigation.navigate(route)
}

  // Function component for displaying the 'FindBaad' screen
function FindBaad({navigation}) {
  // Rendering the component elements
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.header}>Resevationer</Text>
        <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navController(navigation, 'BaadOne')}>
        <Text style={globalStyles.title} >Båd 1</Text>
        </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navController(navigation, 'BaadTwo')}
      >
        <Text style={globalStyles.title} >Båd 2</Text>
      </TouchableOpacity>
        </View>
    );
}

export default FindBaad


