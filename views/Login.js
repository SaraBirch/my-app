import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, Image,} from "react-native";
import React, { useState } from "react";
import { firebase, auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { globalStyles } from "../GlobalStyles/GlobalStyles.js";

function ProfilScreen({ prop }) {
  // This component renders the Profile Screen, which includes a LogIn component.
  // The prop prop is used to pass a message to the LogIn component.

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>{prop}</Text>
      <Text style={globalStyles.header2}>{prop}</Text>
      {/* <Image
       style={styles.image}
        source={require('./image.png')}
        /> */}
      {LogIn()}
    </View>
  );
}

const LogIn = () => {
  // This component renders a login form.

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // This function handles the login process.
  const handleLogin = async () => {
    try {
      // Sign in the user with their email and password.
      const user = await signInWithEmailAndPassword(auth, email, password);

      // If the login was successful, redirect the user to the home page.
      if (user) {
        console.log(user.user.email);
        console.log("ok");
      }
    } catch (error) {
      // If the login failed, log the error to the console.
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <TextInput
        style={globalStyles.borderStyle}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={globalStyles.borderStyle}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Log In" onPress={handleLogin} />
    </SafeAreaView>
  );
};

export default ProfilScreen;
LogIn;
