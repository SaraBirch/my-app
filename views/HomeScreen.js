import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import * as React from "react";

// HomeScreen komponenten tager en prop med og printer indholdet af denne i en <Text/>
function HomeScreen({ prop }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{prop}</Text>
      <Profilbeskrivelse />
    </View>
  );
}

const Profilbeskrivelse = () => {
  const [text, onChangeText] = React.useState('John Doe');
  const [text1, onChangeText1] = React.useState('46 år');
  const [text2, onChangeText2] = React.useState('Mælkevejen 23');
  const [text3, onChangeText3] = React.useState('Helsingørhavn');
  const [text4, onChangeText4] = React.useState('Bavaria Crusier 42');
  const [number, onChangeNumber] = React.useState('+45 12345678');

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
        onChangeText={onChangeText2}r
        value={text2}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText3}r
        value={text3}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText4}r
        value={text4}
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

export default HomeScreen; Profilbeskrivelse

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
