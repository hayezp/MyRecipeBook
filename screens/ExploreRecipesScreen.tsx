import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {ApiRecipe} from '../data/ApiRecipe';

type MealResponse = {
  meals: ApiRecipe[] | null;
};

function ExploreRecipesScreen() {
  const [meals, setMeals] = useState<ApiRecipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchRecipes = async () => {
    setLoading(true);
    setError('');

    try {
      const [chickenResponse, beefResponse] = await Promise.all([
     fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken'),
     fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=beef'),
     ]);

    if (!chickenResponse.ok || !beefResponse.ok) {
     throw new Error('Could not load recipes.');
    }

     const chickenData: MealResponse = await chickenResponse.json();
     const beefData: MealResponse = await beefResponse.json();

     setMeals([
  ...(chickenData.meals ?? []),
  ...(beefData.meals ?? []),
]);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

    return (
    <View style={{flex: 1, backgroundColor: '#fff8f0', padding: 20}}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: '#744c35',
          textAlign: 'center',
          marginBottom: 15,
        }}>
        Explore Recipes
      </Text>

      {loading ? (
        <ActivityIndicator size="large" color="#a56b48" />
      ) : error ? (
        <View>
          <Text style={{color: '#b94a48', textAlign: 'center'}}>
            {error}
          </Text>
          <TouchableOpacity onPress={fetchRecipes}>
            <Text style={{color: '#744c35', textAlign: 'center', marginTop: 15}}>
              Try Again
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={meals}
          keyExtractor={item => item.idMeal}
          refreshing={loading}
          onRefresh={fetchRecipes}
          ListEmptyComponent={
            <Text style={{textAlign: 'center'}}>
              No recipes found.
            </Text>
          }
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: '#ffffff',
                padding: 16,
                borderRadius: 12,
                marginBottom: 12,
              }}>
              <Text style={{fontSize: 19, fontWeight: 'bold', color: '#744c35'}}>
                {item.strMeal}
              </Text>
              <Text>Category: {item.strCategory || 'Unknown'}</Text>
              <Text>Origin: {item.strArea || 'Unknown'}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

export default ExploreRecipesScreen;