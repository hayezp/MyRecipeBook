import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFocusEffect} from '@react-navigation/native';
import {RootStackParamList} from '../App';
import {recipes} from '../data/recipes';


type Props = NativeStackScreenProps<RootStackParamList, 'Recipes'>;
function RecipesScreen({navigation}: Props) {
  const [recipeList, setRecipeList] = useState(recipes);

    useFocusEffect(
  React.useCallback(() => {
    const loadRecipes = async () => {
      try {
        const savedRecipes = await AsyncStorage.getItem('myRecipeBookRecipes');

        if (savedRecipes) {
          const parsedRecipes = JSON.parse(savedRecipes);
          setRecipeList([...recipes, ...parsedRecipes]);
        }
      } catch (error) {
        console.log('Error loading recipes:', error);
      }
    };

    loadRecipes();
  }, []),
);
  const deleteRecipe = (id: string) => {
    Alert.alert(
      'Delete Recipe',
      'Are you sure you want to delete this recipe?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              const savedRecipes = await AsyncStorage.getItem(
                'myRecipeBookRecipes',
              );

              const recipeList = savedRecipes
                ? JSON.parse(savedRecipes)
                : [];

              const updatedRecipes = recipeList.filter(
                (recipe: {id: string}) => recipe.id !== id,
              );

              await AsyncStorage.setItem(
                'myRecipeBookRecipes',
                JSON.stringify(updatedRecipes),
              );

              setRecipeList([...recipes, ...updatedRecipes]);
            } catch (error) {
              Alert.alert('Error', 'Could not delete the recipe.');
            }
          },
        },
      ],
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={recipeList}
      keyExtractor={item => item.id}
      ListEmptyComponent={
  <Text style={styles.subtitle}>
    No recipes found. Add a recipe to get started!
  </Text>
}
      ListHeaderComponent={
        <>
          <Text style={styles.title}>My Recipes</Text>

          <Text style={styles.subtitle}>
            Choose a recipe to see more information.
          </Text>
        </>
      }
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.recipeCard}
          onPress={() =>
            navigation.navigate('RecipeDetails', {
              name: item.name,
              category: item.category,
              ingredients: item.ingredients,
              directions: item.directions,
            })
          }>
          <Text style={styles.recipeName}>{item.name}</Text>
          <Text style={styles.category}>{item.category}</Text>
          {Number(item.id) > 9 && (
  <TouchableOpacity
    style={{
      backgroundColor: '#b94a48',
      padding: 10,
      borderRadius: 8,
      marginTop: 12,
      alignItems: 'center',
    }}
    onPress={event => {
      event.stopPropagation();
      deleteRecipe(item.id);
    }}>
    <Text style={{color: '#ffffff', fontWeight: 'bold'}}>
      Delete Recipe
    </Text>
  </TouchableOpacity>
)}
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8f0',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#744c35',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#725f51',
    textAlign: 'center',
    marginBottom: 22,
  },
  recipeCard: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ead8c8',
    marginBottom: 14,
  },
  recipeName: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#744c35',
  },
  category: {
    fontSize: 15,
    color: '#725f51',
    marginTop: 5,
  },
});

export default RecipesScreen;