import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./src/screens/MainScreen";
import Login from "./src/screens/Authentication/Login";
import SignUp from "./src/screens/Authentication/SignUp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native-paper";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    ; (async () => {
      const data = await AsyncStorage.getItem("currentUser");
      setUser(data);
      setLoading(false);
    }
    )();

  }, [isLoading])

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ?
          (<Stack.Screen component={MainScreen} name="Mainscreen" options={{ headerShown: false }} />) :
          (<><Stack.Screen component={Login} name="Login" options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen component={SignUp} name="SignUp" options={{ headerShown: false }}></Stack.Screen></>)
        }
      </Stack.Navigator>
    </NavigationContainer>)
}

export default App