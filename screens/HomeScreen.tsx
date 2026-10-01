import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Recipe Book</Text>

      <Text style={styles.subtitle}>
        A collection of some of my favorite recipes!
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Welcome!</Text>

        <Text style={styles.description}>
          Browse through different recipes, see what ingredients you need,
          and find something good to make.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Recipes')}>
        <Text style={styles.buttonText}>View Recipes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.aboutButton}
        onPress={() => navigation.navigate('About')}>
        <Text style={styles.aboutButtonText}>About This App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8f0',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#744c35',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#725f51',
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 22,
    borderRadius: 14,
    marginBottom: 26,
    borderWidth: 1,
    borderColor: '#ead8c8',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#744c35',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#4c4038',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#a56b48',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 14,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  aboutButton: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#a56b48',
  },
  aboutButtonText: {
    color: '#744c35',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default HomeScreen;