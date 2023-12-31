import {Text, View, TextInput, SafeAreaView, Button,} from "react-native";
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../GlobalStyles/GlobalStyles.js";

// HomeScreen komponenten tager en prop med og printer indholdet af denne i en <Text/>
const HomeScreen = ({ prop }) => {
  const navigation = useNavigation();

  const handleNavigateToDatabase = () => {
    // Log a message to the console indicating that the button was pressed
    console.log("pressed");
    navigation.navigate("Database");
  };
// Component definition
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>{prop}</Text>
      <Profilbeskrivelse />
      <View style={globalStyles.button}>
        <Button
          title="Opret Post"
          onPress={() => navigation.navigate("Database")}
        />
      </View>
    </View>
  );
};

const Profilbeskrivelse = () => {
  // state variables for different text inputs
  const [text, onChangeText] = React.useState("John Doe");
  const [text1, onChangeText1] = React.useState("46 år");
  const [text2, onChangeText2] = React.useState("Mælkevejen 23");
  const [text3, onChangeText3] = React.useState("Helsingørhavn");
  const [text4, onChangeText4] = React.useState("Bavaria Crusier 42");
  const [number, onChangeNumber] = React.useState("+45 12345678");

    // Return the UI of the HomeScreen component
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <TextInput
        style={globalStyles.borderStyle}
        onChangeText={onChangeText}
        value={text}
        placeholder="Name"
      />
      <TextInput
        style={globalStyles.borderStyle}
        onChangeText={onChangeText1}
        value={text1}
        placeholder="Age"
      />
      <TextInput
        style={globalStyles.borderStyle}
        onChangeText={onChangeText2}
        value={text2}
        placeholder="Address"
      />

      <TextInput
        style={globalStyles.borderStyle}
        onChangeText={onChangeText3}
        value={text3}
        placeholder="City"
      />
      <TextInput
        style={globalStyles.borderStyle}
        onChangeText={onChangeText4}
        value={text4}
        placeholder="Boat Model"
      />
      <TextInput
        style={globalStyles.borderStyle}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Phone Number"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
Profilbeskrivelse;
