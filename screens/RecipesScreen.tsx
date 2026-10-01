import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';


// Recipes that will be displayed on the Recipes screen.
const recipes = [
 {
  name: 'Buffalo Chicken Dip',
  category: 'Appetizer',
  ingredients: [
    '2 cups shredded chicken',
    '8 oz cream cheese',
    '1/2 cup ranch dressing',
    '1/2 cup buffalo sauce',
    '1 cup shredded cheddar cheese',
  ],
  directions: [
    'Add the shredded chicken, cream cheese, ranch dressing, buffalo sauce, and shredded cheese to the crockpot.',
    'Stir everything together.',
    'Cook on low until everything is hot and the cheese and cream cheese are completely melted.',
    'Stir the dip occasionally while it cooks.',
    'Once everything is melted and mixed together, serve it warm with tortilla chips, crackers, or vegetables.',
  ],
 },
 {
  name: 'Chicken Alfredo',
  category: 'Dinner',
  ingredients: [
    '2 chicken breasts',
    'Fettuccine pasta',
    '2 tablespoons butter',
    '2 cloves garlic, minced',
    '2 cups heavy cream',
    '1 cup grated Parmesan cheese',
    '1/2 cup grated Romano cheese',
    'Salt',
    'Black pepper',
    'Garlic powder',
  ],
  directions: [
    'Season the chicken with salt, pepper, and garlic powder.',
    'Cook the chicken in a pan until it is completely cooked through, then slice it into pieces.',
    'Cook the fettuccine according to the package directions and drain it.',
    'For the homemade Alfredo sauce, melt the butter in a pan and add the minced garlic.',
    'Pour in the heavy cream and let it warm over medium-low heat.',
    'Slowly stir in the Parmesan and Romano cheese until the sauce is smooth and creamy.',
    'Season the Alfredo sauce with salt and pepper to taste.',
    'Add the cooked pasta to the homemade Alfredo sauce and mix everything together.',
    'Add the sliced chicken on top and serve.',
  ],
 },
 {
  name: 'Pumpkin Bread',
  category: 'Baking',
  ingredients: [
    '1 3/4 cups all-purpose flour',
    '1 teaspoon baking soda',
    '1/2 teaspoon salt',
    '1 teaspoon ground cinnamon',
    '1/2 teaspoon ground nutmeg',
    '1/4 teaspoon ground cloves',
    '2 large eggs',
    '3/4 cup granulated sugar',
    '1/2 cup brown sugar',
    '1 1/2 cups pumpkin puree',
    '1/2 cup vegetable oil',
    '1/4 cup milk',
    '1 teaspoon vanilla extract',
  ],
  directions: [
    'Preheat the oven to 350°F.',
    'Grease a loaf pan and set it aside.',
    'In one bowl, mix together the flour, baking soda, salt, cinnamon, nutmeg, and cloves.',
    'In another bowl, mix the eggs, granulated sugar, brown sugar, pumpkin puree, vegetable oil, milk, and vanilla.',
    'Slowly add the dry ingredients into the wet ingredients and mix until everything is combined.',
    'Pour the batter into the prepared loaf pan.',
    'Bake until the center is completely cooked and a toothpick comes out clean.',
    'Let the pumpkin bread cool before removing it from the pan and slicing it.',
  ],
 },
 {
  name: 'Banana Bread',
  category: 'Baking',
  ingredients: [
    '3 ripe bananas',
    '1/2 cup melted butter',
    '3/4 cup sugar',
    '1 large egg',
    '1 teaspoon vanilla extract',
    '1 teaspoon baking soda',
    'Pinch of salt',
    '1 1/2 cups all-purpose flour',
  ],
  directions: [
    'Preheat the oven to 350°F.',
    'Mash the bananas in a large bowl.',
    'Mix in the melted butter, sugar, egg, and vanilla.',
    'Add the baking soda and a pinch of salt.',
    'Slowly mix in the flour until everything is combined.',
    'Pour the batter into a greased loaf pan.',
    'Bake until the center is cooked and a toothpick comes out clean.',
    'Let the banana bread cool before slicing it.',
  ],
 },
 {
  name: 'Tacos with Homemade Taco Seasoning',
  category: 'Dinner',
  ingredients: [
    '1 lb ground beef',
    'Taco shells or tortillas',
    'Shredded cheese',
    'Lettuce',
    'Tomato',
    'Sour cream',
    'Salsa',
    '1 tablespoon chili powder',
    '1 teaspoon ground cumin',
    '1 teaspoon garlic powder',
    '1/2 teaspoon onion powder',
    '1/2 teaspoon paprika',
    '1/2 teaspoon salt',
    '1/4 teaspoon black pepper',
    '1/4 cup water',
  ],
  directions: [
    'Cook the ground beef in a pan over medium heat until it is completely browned.',
    'Drain any extra grease from the pan.',
    'For the homemade taco seasoning, mix the chili powder, cumin, garlic powder, onion powder, paprika, salt, and black pepper together.',
    'Add the homemade taco seasoning and water to the cooked ground beef.',
    'Stir everything together and let it cook for a few more minutes until the meat is completely coated in the seasoning.',
    'Warm the taco shells or tortillas.',
    'Fill each taco with the seasoned meat.',
    'Add shredded cheese, lettuce, tomato, sour cream, salsa, or any other toppings you want.',
  ],
 },
 {
  name: 'Chicken Quesadillas',
  category: 'Dinner',
  ingredients: [
    'Chicken breasts or rotisserie chicken',
    'Italian dressing, if using chicken breasts',
    'Large flour tortillas',
    'Shredded Mexican blend cheese',
    'Taco Bell Spicy Chipotle Sauce',
    'Butter or cooking spray',
  ],
  directions: [
    'If using chicken breasts, marinate the chicken in Italian dressing before cooking.',
    'Cook the marinated chicken until it is completely cooked through, then cut or shred it into smaller pieces.',
    'If using rotisserie chicken, shred the chicken and set it aside.',
    'Lay a flour tortilla in a pan and add shredded cheese to one half.',
    'Add the chicken on top of the cheese.',
    'Add Taco Bell Spicy Chipotle Sauce over the chicken.',
    'Add another layer of shredded cheese and fold the tortilla in half.',
    'Cook the quesadilla on both sides until the tortilla is golden and the cheese is completely melted.',
    'Cut the quesadilla into pieces and serve.',
  ],
 },
 {
  name: 'Chicken Fajita Bowls',
  category: 'Dinner',
  ingredients: [
    'Chicken breasts or rotisserie chicken',
    'Fajita seasoning, if using chicken breasts',
    'White or brown rice',
    'Bell peppers',
    'Onion',
    'Shredded cheese',
    'Lettuce',
    'Olive oil',
  ],
  directions: [
    'Cook the rice according to the package directions and set it aside.',
    'If using chicken breasts, season the chicken with fajita seasoning and cook it until it is completely cooked through.',
    'Cut the cooked chicken into smaller pieces. If using rotisserie chicken, shred the chicken and set it aside.',
    'Slice the bell peppers and onion.',
    'Cook the bell peppers and onion in a little olive oil until they are soft and slightly browned.',
    'Add rice to the bottom of a bowl.',
    'Add the chicken and cooked bell peppers and onions.',
    'Top the bowl with shredded cheese and lettuce.',
  ],
 },
 {
  name: 'Chocolate Chip Cookies',
  category: 'Dessert',
  ingredients: [
    '2 1/4 cups all-purpose flour',
    '1 teaspoon baking soda',
    '1/2 teaspoon salt',
    '1 cup butter, softened',
    '3/4 cup granulated sugar',
    '3/4 cup brown sugar',
    '2 large eggs',
    '1 teaspoon vanilla extract',
    '2 cups chocolate chips',
  ],
  directions: [
    'Preheat the oven to 350°F.',
    'Mix the flour, baking soda, and salt together in a bowl.',
    'In a separate bowl, mix the softened butter, granulated sugar, and brown sugar together.',
    'Add the eggs and vanilla and mix everything together.',
    'Slowly add the dry ingredients into the wet ingredients.',
    'Stir in the chocolate chips.',
    'Scoop the cookie dough onto a baking sheet.',
    'Bake until the edges are lightly golden.',
    'Let the cookies cool for a few minutes before moving them from the baking sheet.',
  ],
 },
 {
  name: 'Spaghetti Bake',
  category: 'Dinner',
  ingredients: [
    'Spaghetti noodles',
    'Red pasta sauce',
    'Ground beef, optional',
    '2 tablespoons butter',
    '2 cloves garlic, minced',
    '2 cups heavy cream',
    '1 cup grated Parmesan cheese',
    '1/2 cup grated Romano cheese',
    'Shredded mozzarella cheese',
    'Salt',
    'Black pepper',
  ],
  directions: [
    'Preheat the oven to 350°F.',
    'Cook the spaghetti noodles according to the package directions and drain them.',
    'If using ground beef, cook the beef in a pan until completely browned and drain any extra grease.',
    'Heat the red pasta sauce and mix in the cooked ground beef if using it.',
    'For the homemade Alfredo sauce, melt the butter in a pan and add the minced garlic.',
    'Pour in the heavy cream and let it warm over medium-low heat.',
    'Slowly stir in the Parmesan and Romano cheese until the Alfredo sauce is smooth and creamy.',
    'Season the Alfredo sauce with salt and black pepper to taste.',
    'Mix the spaghetti noodles with both the red sauce and homemade Alfredo sauce.',
    'Add the spaghetti mixture to a baking dish and top it with shredded mozzarella cheese.',
    'Bake until everything is hot and the cheese on top is melted.',
    'Let it cool for a few minutes before serving.',
  ],
 },
];

type Props = NativeStackScreenProps<RootStackParamList, 'Recipes'>;
function RecipesScreen({navigation}: Props) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Recipes</Text>

      <Text style={styles.subtitle}>
        Choose a recipe to see more information.
      </Text>

      {recipes.map((recipe, index) => (
  <TouchableOpacity
    key={index}
    style={styles.recipeCard}
    onPress={() =>
      navigation.navigate('RecipeDetails', {
        name: recipe.name,
        category: recipe.category,
        ingredients: recipe.ingredients,
        directions: recipe.directions,
      })
    }>
    <Text style={styles.recipeName}>{recipe.name}</Text>
    <Text style={styles.category}>{recipe.category}</Text>
  </TouchableOpacity>
))}
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