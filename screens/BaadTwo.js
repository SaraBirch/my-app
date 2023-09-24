import {Button, StyleSheet, Text, View} from "react-native";
import * as React from "react";

function BaadTwo({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dette er Båd 2</Text>
            <View style={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'colum'}}>
                <View style={{margin: '2%'}} >
                    <Button title="Båd 1" onPress={() => navigation.navigate('BaadOne')}  />
                </View>
                <View style={{margin: '2%'}} >
                    <Button title="Tilbage" onPress={() => navigation.goBack() } />
                </View>
            </View>
        </View>
    );
}
//Eksport af Screen således den kan importeres- og bruges i andres komponenter
export default BaadTwo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightgray",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
    },
});