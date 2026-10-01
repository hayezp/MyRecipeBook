import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import RecipesScreen from './screens/RecipesScreen';
import RecipeDetailsScreen from './screens/RecipeDetailsScreen';
import AboutScreen from './screens/AboutScreen';

// These are the screens that can be used throughout the app.
export type RootStackParamList = {
  Home: undefined;
  Recipes: undefined;
  RecipeDetails: {
    name: string;
    category: string;
    ingredients: string[];
    directions: string[];
  };
  About: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'My Recipe Book'}}
        />

        <Stack.Screen
          name="Recipes"
          component={RecipesScreen}
          options={{title: 'Recipes'}}
        />

        <Stack.Screen
          name="RecipeDetails"
          component={RecipeDetailsScreen}
          options={{title: 'Recipe Details'}}
        />

        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{title: 'About'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;