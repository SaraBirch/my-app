import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";


import HomeScreen from "./views/HomeScreen";
import ProfilScreen from "./views/Login";
import StackNavigator from "./views/StackNavigator";
import BoatPost from "./views/BoatPost"

const Tab = createBottomTabNavigator();
const homeText = "Din Profil";
const header = "BOAT";
const header2 = 'Best of All time';


function Navi() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],
          tabBarIcon: ({ color, size }) => {
            if (route.name === "Home") {
              return (
                <Ionicons name={"home-outline"} size={size} color={color} />
              );
            } else if (route.name === "Profil") {
              return (
                <Ionicons name="person-outline" size={size} color={color} />
              );
            } else {
              return <Ionicons name="boat-outline" size={size} color={color} />;
            }
          },
        })}
      >
  
        <Tab.Screen
          name="Profil"
          children={() => <ProfilScreen prop={header} />}
        />
        <Tab.Screen
          name="Home"
          children={() => <HomeScreen prop={homeText} />}
        />
        <Tab.Screen
          name="BoatPost"
          children={() => <BoatPost prop={header} />}
        />
        <Tab.Screen name="Boat" component={StackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navi; 


