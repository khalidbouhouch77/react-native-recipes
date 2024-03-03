import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen"
import DetailsScreen from "./screens/DetailsScreen"
import WelcomeScreen from "./screens/WelcomeScreen"
import RecipieDetailScreen from "./screens/RecipieDetailScreen"
import { I18nManager } from 'react-native';

const Stack = createNativeStackNavigator();

// Force RTL layout direction
I18nManager.forceRTL(true);
I18nManager.isRTL = true;

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="RecipieDetailScreen" component={RecipieDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;