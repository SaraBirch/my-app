import {StyleSheet, Text, View, FlatList} from "react-native";
import React, { useEffect, useState } from 'react';

function getData() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      // Hent data fra indlæg (posts) endpointet
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          setPosts(data);
        })
        .catch(error => {
          console.error('Fejl ved hentning af data:', error);
        });
    }, []);
  
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Indlæg fra JSONPlaceholder</Text>
        <FlatList
          data={posts}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.postContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          )}
        />
      </View>
    );
  }

function ProfilScreen({prop}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{prop}</Text>
            {getData()}
        </View>
    );
}

export default ProfilScreen

//Lokal styling til brug i SettingsScreen
const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        paddingBottom:100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height:'100%'
    },
    text: {
        fontSize: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      postContainer: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      body: {
        fontSize: 16,
      },
    });