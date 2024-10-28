import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./src/screens/MainScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={MainScreen} name="mainscreen" options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>)
}

export default App