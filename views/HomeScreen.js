import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import * as React from "react";

// HomeScreen komponenten tager en prop med og printer indholdet af denne i en <Text/>
function HomeScreen({ prop }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{prop}</Text>
      <TextInputExample />
    </View>
  );
}

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [text1, onChangeText1] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
       <TextInput
        style={styles.input}
        onChangeText={onChangeText1}r
        value={text1}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

// Lokal styling til brug i HomeScreen
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
