import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// import of all screens
import HomeScreen from "./views/HomeScreen";
import LoginScreen from "./views/Login";
import StackNavigator from "./views/StackNavigator";
import FilterScreen from "./views/FilterScreen";
import DatabaseScreen from "./views/DatabaseScreen";

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();
// Define text constants for different tabs
const homeText = "Din Profil";
const databasetext = "Database";
const filtertext = "Filter";

function Navi() {
  // State variable to manage the user's login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Check the user's credentials and set the isLoggedIn state accordingly
    setIsLoggedIn(true);
  };
  // Return statement for rendering the component
  return (
    <>
      {/* Display the LoginScreen component if the user is not logged in */}
      {!isLoggedIn && <LoginScreen onLogin={handleLogin} />}
      {isLoggedIn && (
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
              // Set the tab bar icons based on the route name
              tabBarIcon: ({ color, size }) => {
                if (route.name === "Home") {
                  return (
                    <Ionicons name={"home-outline"} size={size} color={color} />
                  );
                } else if (route.name === "Profil") {
                  return (
                    <Ionicons name="person-outline" size={size} color={color} />
                  );
                } else if (route.name === "Filter") {
                  return (
                    <Ionicons name="filter-sharp" size={size} color={color} />
                  );
                } else if (route.name === "Database") {
                  return (
                    <Ionicons name="server-sharp" size={size} color={color} />
                  );
                } else {
                  return (
                    <Ionicons name="boat-sharp" size={size} color={color} />
                  );
                }
              },
            })}
          >
            <Tab.Screen //navigation bar
              name="Home"
              children={() => <HomeScreen prop={homeText} />}
            />
            <Tab.Screen
              name="Database"
              children={() => <DatabaseScreen prop={databasetext} />}
            />
            <Tab.Screen
              name="Filter"
              children={() => <FilterScreen prop={filtertext} />}
            />

            <Tab.Screen name="Boat" component={StackNavigator} />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

export default Navi;
