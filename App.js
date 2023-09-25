import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./views/HomeScreen";
import ProfilScreen from "./views/DinProfil";
import StackNavigator from "./views/StackNavigator";

const Tab = createBottomTabNavigator();
const homeText = "Din profil";
const profilText = "Venligst, Log ind";

function App() {
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
          children={() => <ProfilScreen prop={profilText} />}
        />
        <Tab.Screen
          name="Home"
          children={() => <HomeScreen prop={homeText} />}
        />
        <Tab.Screen name="Boat" component={StackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
