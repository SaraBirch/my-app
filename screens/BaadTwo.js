import React, { useState } from "react";
import { Button, Text, View, TextInput } from "react-native";
import { globalStyles } from "../GlobalStyles/GlobalStyles.js";

// Function component for BaadTwo screen
function BaadTwo({ navigation }) {
  // State variables for boat name, boat size, and timing
    const [boatName, setBoatName] = useState("");
    const [boatSize, setBoatSize] = useState("");
    const [when, setWhen] = useState("");

    // Return the UI of the BaadTwo component
    return (
        <View style={globalStyles.container}>
         <Text style={globalStyles.header}>Din resevation</Text>
      <Text style={globalStyles.title}>Båd navn:</Text>
      <TextInput
        style={globalStyles.borderStyle}
        value={boatName}
        onChangeText={setBoatName}
        placeholder="Bavarian Yacth"
      />
      <Text style={globalStyles.title}>Størrelse:</Text>
      <TextInput
        style={globalStyles.borderStyle}
        value={boatSize}
        onChangeText={setBoatSize}
        placeholder="38"
      />
      <Text style={globalStyles.title}>Hvornår:</Text>
      <TextInput
        style={globalStyles.borderStyle}
        value={when}
        onChangeText={setWhen}
        placeholder="20.08 - 27.08 2024"
        multiline
      /> 
      <View style={globalStyles.button} >
         {/* Button component with title 'Båd 1', when pressed, it navigates to 'BaadOne' */}
      <Button title="Båd 1" onPress={() => navigation.navigate('BaadOne')}  />
      </View>
      <View style={globalStyles.button} >
      <Button title="Tilbage" onPress={() => navigation.goBack() } />
      </View>
      </View>
       
    );
}
//Eksport af Screen således den kan importeres- og bruges i andres komponenter
export default BaadTwo

