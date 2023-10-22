import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import { collection, getDocs, addDoc, query, where, orderBy,} from "firebase/firestore";
import { db } from "../Firebase"; // Import your Firebase Firestore instance
import { globalStyles } from "../GlobalStyles/GlobalStyles.js";

//This component allows users to same and retrieve boat data 
const DatabaseScreen = () => {
  const [boatname, setBoatname] = useState(""); 
  const [boatsize, setBoatsize] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [data, setData] = useState([]);
  const [savedData, setSavedData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const saveData = async () => {
    // Save the product and name to Firestore
    const docRef = await addDoc(collection(db, "boats"), {
      boatname: boatname,
      price: price,
      description: description,
      boatsize: boatsize,
    });

    console.log("Document written with ID: ", docRef.id);
  };

  const getData = async () => {
    // Get the data from Firestore
    const q = query(collection(db, "boats"), orderBy("boatname"));

    // Get the boat obejcts from Firestore
    const querySnapshot = await getDocs(q);
    const fetchedData = [];
    // Iterate over the query snapsshot and add each boat object to the array
    querySnapshot.forEach((doc) => {
      const item = {
        id: doc.id,
        ...doc.data(),
      };
      console.log(item);
      fetchedData.push(item);
    });

    setData(fetchedData);
  };

  useEffect(() => {
    // Get the data from Firestore when the component mounts
    getData();
  }, []);

  useEffect(() => {
    // Store the saved data in the savedData state
    setSavedData(data);
  }, [data]);

  // Renders each boat obejct in the Flatlist
  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.boatname}</Text>
        <Text>{item.boatsize}</Text>
        <Text>{item.price}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  };

  // Return the UI of the DatabaseScrren component
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Opret et båd til leje</Text>
      <TextInput
        style={globalStyles.borderStyle}
        placeholder="Boat name"
        value={boatname}
        onChangeText={(text) => setBoatname(text)}
      />
      <TextInput
        style={globalStyles.borderStyle}
        placeholder="Boat size"
        value={boatsize}
        onChangeText={(text) => setBoatsize(text)}
      />
      <TextInput
        placeholder="Price"
        style={globalStyles.borderStyle}
        value={price}
        onChangeText={(text) => setPrice(text)}
      />
      <TextInput
        placeholder="Description"
        style={globalStyles.borderStyle}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <View style={globalStyles.button}>
        <Button title="Save" onPress={saveData} />
      </View>
      <View style={globalStyles.button}>
        <Button title="Get" onPress={getData} />
      </View>

      <FlatList
        style={globalStyles.List}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default DatabaseScreen;
