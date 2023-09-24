import * as React from "react";
import BaadOne from "../screens/BaadOne"
import BaadTwo from "../screens/BaadTwo";
import FindBaad from "./FindBaad";
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator()

function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="FindBaad"
        >
            <Stack.Screen name="FindBaad" component={FindBaad}
                          options={{
                              headerTitleAlign: 'center',
                              headerTitleStyle: {color: 'white'},
                              headerStyle: {backgroundColor: '#ba6262'}}
                          }
            />
            <Stack.Screen name="BaadOne" component={BaadOne} options={{
                headerTitleStyle: { textAlign: 'right', color: 'white' },
                headerStyle: {backgroundColor: '#62bab5'}
            }} />
            <Stack.Screen name="BaadTwo" component={BaadTwo} options={{
                headerTitleStyle: {color: 'black'},
                headerStyle: {backgroundColor: '#628bba'}
            }}
            />
        </Stack.Navigator>
    )
}

// Export the functional component so it can be imported in other components
export default StackNavigator
