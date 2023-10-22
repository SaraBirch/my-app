import {Text, View, SafeAreaView, Button, TextInput,} from "react-native";
import React, { useState } from "react";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { globalStyles } from "../GlobalStyles/GlobalStyles.js";

function LoginScreen({ onLogin }) {
  // This component renders the Profile Screen, which includes a LogIn component.
  // The prop prop is used to pass a message to the LogIn component.
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>{}</Text>
      <Text style={globalStyles.header2}>{}</Text>
      {LogIn(onLogin)}
    </View>
  );
}

// log ind function 
const LogIn = (onLogin) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // this is the function than handles the login process
  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (auth) {   // if successfully signed in, redirect the new user to the home page
        console.log("ok");
        onLogin();
      }
    // Catch any errors that occur during the sign-in process
    } catch (error) {
      console.log(error);
    }
  };
  // Return the UI of the Login component
  return (
    <SafeAreaView>
      <Text style={globalStyles.header}>B.O.A.T</Text>
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
      <View style={globalStyles.button}>
        <Button title="Log In" onPress={handleLogin} />
      </View>
      
    </SafeAreaView>
  );
};

export default LoginScreen;
LogIn;
