import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList, TextInput } from "react-native";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "../Firebase"; // Import your Firebase Firestore instance
import { globalStyles } from "../GlobalStyles/GlobalStyles.js";

// Create a FilterScreen component
const FilterScreen = () => {
  // create state variables to store the data and search query
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Create a function to get the filtered data from Firebase Firestore
  const getData = async () => {
    // Create a Firestore query for the 'boats' collection
    const q = query(
      collection(db, "boats"),
      orderBy("price"),
      where("boatname", "==", searchQuery) // Filter by boat name
    );
    // Get the documents matching the query
    const querySnapshot = await getDocs(q);

    // Create an array to store the fetched data
    const fetchedData = [];
    // Iterate over the query snapshot and add each document to the array
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      // create an item object from the document data
      const item = {
        id: doc.id,
        ...doc.data(),
      };
      fetchedData.push(item);
    });
    // Set the data state with the fetched data
    setData(fetchedData);
  };

  // Get the data from Firestore when the component mounts
  useEffect(() => {
    getData();
  }, []);

  // Create a function to render each item object in the FlatList
  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.boatname}</Text>
      </View>
    );
  };
  // Return the UI of the FilterScreen component
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Søg efter en båd</Text>
      <TextInput
        style={globalStyles.borderStyle}
        placeholder="Boat name"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      {/* Button to get filtered data from Firestore */}
      <View style={globalStyles.button}>
        <Button title="Get" onPress={getData} />
      </View>

      {/* Display the filtered data in a FlatList */}
      <FlatList
        style={globalStyles.List}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FilterScreen;
