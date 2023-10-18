import {TouchableOpacity, StyleSheet, Text, View} from "react-native";
import * as React from "react";
import { globalStyles } from "../GlobalStyles/GlobalStyles.js";

const navController = (navigation, route) =>{
    navigation.navigate(route)
}

function FindBaad({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.header}>Find Båd</Text>
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


