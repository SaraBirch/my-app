import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { globalStyles } from "../GlobalStyles/GlobalStyles.js";

const BoatPost = () => {
  const [boatName, setBoatName] = useState('');
  const [boatType, setBoatType] = useState('');
  const [description, setDescription] = useState('');

  const handlePost = () => {
    // Logic to handle posting the boat details
    const postData = {
      boatName,
      boatType,
      description,
    };
    console.log('Boat Post Data:', postData);
    // You can perform further actions here, such as sending the data to a server
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Boat Name:</Text>
      <TextInput
        style={globalStyles.borderStyle}
        value={boatName}
        onChangeText={setBoatName}
        placeholder="Enter boat name"
      />
      <Text style={globalStyles.title}>Boat Type:</Text>
      <TextInput
        style={globalStyles.borderStyle}
        value={boatType}
        onChangeText={setBoatType}
        placeholder="Enter boat type"
      />
      <Text style={globalStyles.title}>Description:</Text>
      <TextInput
        style={globalStyles.borderStyle}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
        multiline
      />
      <Button title="Post" onPress={handlePost} />
    </View>
  );
};


export default BoatPost;