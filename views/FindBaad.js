import {TouchableOpacity, StyleSheet, Text, View} from "react-native";
import * as React from "react";

const navController = (navigation, route) =>{
    navigation.navigate(route)
}

function FindBaad({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Find Båd!</Text>
        <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
        onPress={() => navController(navigation, 'BaadOne')}>
        <Text style={{ color: 'white' }}>Båd 1</Text>
        </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: 'blue', marginTop: 10, padding: 10, borderRadius: 5 }}
        onPress={() => navController(navigation, 'BaadTwo')}
      >
        <Text style={{ color: 'white' }}>Båd 2</Text>
      </TouchableOpacity>
        </View>
    );
}

export default FindBaad


//Lokal styling til brug i DetailsScreen.
const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        paddingBottom:100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height:'100%'
    },
    text: {
        fontSize: 20,
    },
});