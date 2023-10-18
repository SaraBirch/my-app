import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
    container: {
      paddingTop: 100,
      paddingBottom: 100,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    header: {
      fontSize: 40,
      color: '#77C3EC',
      
    },
    header2: {
        fontSize: 50,
        color: '#000000',
        
      },
    
    title: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center"
      
    },
    borderStyle: {
      borderColor: "#ADD8E6",
      borderWidth: 1,
      borderRadius: 50,
      height: 50, 
      width: 250, 
      padding: 10, 
    },

    safeArea: {
     paddingHorizontal: 20,
      },

    button: {
     backgroundColor: '#ADD8E6',
     padding: 10, 
     borderRadius: 5,
     height: 50, 
     width: 250, 
     padding: 10,  
        
      },
    
  });