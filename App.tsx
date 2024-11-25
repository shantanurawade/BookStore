import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./src/screens/MainScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native-paper";
import { View } from "react-native";
import Authentication from "./src/screens/Authentication/Authentication";
import { useSelector } from "react-redux";
import { RootState } from "./src/redux/Store";


const Stack = createNativeStackNavigator();

const App = () => {
  const [token, setToken] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);
  const authStatus = useSelector((store: RootState) => store.auth.toggle);

  // Check wether user is already logged in or not.
  useEffect(() => {

    ; (async () => {
      const data = await AsyncStorage.getItem("userToken");
      setToken(data);
      setLoading(false);
    }
    )();

  }, [isLoading, authStatus]);

  // While checking existing user it will show the activity indicator.
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
        {token ?
          (<Stack.Screen component={MainScreen} name="MainScreen" options={{ headerShown: false }} />) :
          (<Stack.Screen component={Authentication} name="Authentication" options={{ headerShown: false }}></Stack.Screen>)
        }
      </Stack.Navigator>
    </NavigationContainer>)
}

export default App;