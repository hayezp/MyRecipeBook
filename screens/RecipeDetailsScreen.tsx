import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'RecipeDetails'
>;

function RecipeDetailsScreen({route}: Props) {
  // Gets the selected recipe information passed from the Recipes screen.
  const {name, category, ingredients, directions} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.category}>{category}</Text>

        <Text style={styles.sectionTitle}>Ingredients</Text>

        {ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.text}>
            • {ingredient}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Directions</Text>

        {directions.map((direction, index) => (
          <Text key={index} style={styles.direction}>
            {index + 1}. {direction}
          </Text>
        ))}
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
  card: {
    backgroundColor: '#ffffff',
    padding: 22,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#ead8c8',
    marginTop: 15,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#744c35',
    marginBottom: 6,
  },
  category: {
    fontSize: 16,
    color: '#725f51',
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#a56b48',
    marginTop: 15,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#4c4038',
    lineHeight: 25,
    marginBottom: 4,
  },
  direction: {
    fontSize: 16,
    color: '#4c4038',
    lineHeight: 24,
    marginBottom: 10,
  },
});

export default RecipeDetailsScreen;