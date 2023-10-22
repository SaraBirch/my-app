import React, { useState } from "react";
import { Button, Text, View, TextInput } from "react-native";
import { globalStyles } from "../GlobalStyles/GlobalStyles.js";

// Function component for BaadOne screen
function BaadOne({ navigation }) {
  // State variables for boat name, boat size, and timing
  const [boatName, setBoatName] = useState("");
  const [boatSize, setBoatSize] = useState("");
  const [when, setWhen] = useState("");

  // Return the UI of the BaadOne component
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.header}>Din resevation</Text>
      <Text style={globalStyles.title}>Boat Name:</Text>
      <TextInput
        style={globalStyles.borderStyle}
        value={boatName}
        onChangeText={setBoatName}
        placeholder="Bavarian Yacth"
      />
      <Text style={globalStyles.title}>Boat size:</Text>
      <TextInput
        style={globalStyles.borderStyle}
        value={boatSize}
        onChangeText={setBoatSize}
        placeholder="43"
      />
      <Text style={globalStyles.title}>Hvornår:</Text>
      <TextInput
        style={globalStyles.borderStyle}
        value={when}
        onChangeText={setWhen}
        placeholder="01.06 - 19.06 2024"
        multiline
      /> 
      <View style={globalStyles.button}>
        {/* Button component with title 'Båd 2', when pressed, it navigates to 'BaadTwo' */}
        <Button title="Båd 2" onPress={() => navigation.navigate("BaadTwo")} />
      </View>
      <View style={globalStyles.button}>
        <Button title="Tilbage" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}
//Eksport af Screen således den kan importeres- og bruges i andres komponenter
export default BaadOne;
