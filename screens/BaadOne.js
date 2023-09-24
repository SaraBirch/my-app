import {Button, StyleSheet, Text, View} from "react-native";
import * as React from "react";

function BaadOne({ navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dette er Båd 1</Text>
            <View style={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'coluem'}}>
            <View style={{margin: '2%'}} >
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
    },
});