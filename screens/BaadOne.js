import {Button, StyleSheet, Text, View} from "react-native";
import * as React from "react";
import { globalStyles } from "../GlobalStyles/GlobalStyles.js";

function BaadOne({ navigation}) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Dette er Båd 1</Text>
            <Text style={globalStyles.title}>En Bavaria Yatch 43</Text>
            <View style={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'coluem'}}>
            <View style={globalStyles.button} >
                    <Button title="Båd 2" backgroundColor="red" onPress={() => navigation.navigate('BaadTwo')}  />
                </View>
                <View style={{margin: '2%'}} >
                    <Button title="Tilbage" onPress={() => navigation.goBack() } />
                </View>
            </View>
        </View>
    );
}
//Eksport af Screen således den kan importeres- og bruges i andres komponenter
export default BaadOne


//Lokal styling til brug i ScreenOne
const styles = StyleSheet.create({
 
    text: {
        fontSize: 20,
    },
});