import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About My Recipe Book</Text>

      <View style={styles.card}>
        <Text style={styles.text}>
          I created this app as a place to keep some of my favorite recipes
          together. I chose a recipe book because I thought it would be a fun
          way to create an app with multiple screens while also using recipes
          that I actually like and make all the time.
        </Text>

        <Text style={styles.text}>
          The app lets you look through different recipes of mine and select one to
          see more information about it, including the ingredients and
          directions.
        </Text>
      </View>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#744c35',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 22,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#ead8c8',
  },
  text: {
    fontSize: 16,
    color: '#4c4038',
    lineHeight: 24,
    marginBottom: 14,
  },
});

export default AboutScreen;