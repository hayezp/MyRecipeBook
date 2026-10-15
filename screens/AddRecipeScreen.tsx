import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';

function AddRecipeScreen() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [directions, setDirections] = useState('');

  const handleSave = async () => {
    if (
      !name.trim() ||
      !category.trim() ||
      !ingredients.trim() ||
      !directions.trim()
    ) {
      Alert.alert('Missing Information', 'Please fill out all the fields.');
      return;
    }

    try {
  const savedRecipes = await AsyncStorage.getItem('myRecipeBookRecipes');

  const recipeList = savedRecipes ? JSON.parse(savedRecipes) : [];

  const newRecipe = {
    id: Date.now().toString(),
    name: name.trim(),
    category: category.trim(),
    ingredients: ingredients.split('\n').map(item => item.trim()).filter(Boolean),
    directions: directions.split('\n').map(item => item.trim()).filter(Boolean),
  };

  recipeList.push(newRecipe);

  await AsyncStorage.setItem(
    'myRecipeBookRecipes',
    JSON.stringify(recipeList),
  );

  Alert.alert('Success!', 'Your recipe has been saved!');
} catch (error) {
  Alert.alert('Error', 'Something went wrong while saving your recipe.');
}
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add a Recipe</Text>

      <Text style={styles.subtitle}>
        Add a recipe that you want to keep in your recipe book!
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Recipe Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter recipe name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Category</Text>
        <TextInput
          style={styles.input}
          placeholder="Example: Dinner, Dessert, Baking"
          value={category}
          onChangeText={setCategory}
        />

        <Text style={styles.label}>Ingredients</Text>
        <TextInput
          style={styles.largeInput}
          placeholder="Enter each ingredient on a new line"
          multiline
          textAlignVertical="top"
          value={ingredients}
          onChangeText={setIngredients}
        />

        <Text style={styles.label}>Directions</Text>
        <TextInput
          style={styles.largeInput}
          placeholder="Enter each step on a new line"
          multiline
          textAlignVertical="top"
          value={directions}
          onChangeText={setDirections}
        />

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save Recipe</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#ead8c8',
    marginBottom: 35,
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#744c35',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ead8c8',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: '#4c4038',
    marginBottom: 18,
  },
  largeInput: {
    borderWidth: 1,
    borderColor: '#ead8c8',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: '#4c4038',
    height: 110,
    marginBottom: 18,
  },
  button: {
    backgroundColor: '#a56b48',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default AddRecipeScreen;