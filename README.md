# My Recipe Book App

For this assignment I made a recipe book app. I picked this idea because I thought it would be fun to make and I could put some of the recipes that I actually make into the app.

The app has four screens. There is a home screen, a recipes screen, a recipe details screen, and an about screen.

On the home screen you can either go look at the recipes or go to the about page. The recipes page has a list of different recipes that I like. I added Buffalo Chicken Dip, Chicken Alfredo, Pumpkin Bread, Banana Bread, Tacos, Chicken Quesadillas, Chicken Fajita Bowls, Chocolate Chip Cookies, and Spaghetti Bake.

When you click on one of the recipes it takes you to another screen where you can see the ingredients and directions for that recipe.

For the navigation I used React Navigation with a stack navigator. I also passed the recipe information from the recipes screen to the details screen using navigation parameters. That way when you click on a different recipe, the details page shows the information for the one you picked.

I used React Native, TypeScript, React Navigation, and StyleSheet for this app.

## Module 5 - Recipe List and Storage

For Module 5, I updated My Recipe Book to let users add and save their own recipes. I used FlatList to display the recipes and useState to manage the recipe list. I also created a TypeScript Recipe interface to keep all the recipe information organized. 

The Add Recipe screen has fields for the recipe name, category, ingredients, and directions. The app has been made to check that all fields are filled out before saving, if not it gives an error message. Users are also able to delete recipes they added, with a confirmation message before actually deleting it. 

I used AsyncStorage to save new recipes on the device. This means the recipes are still there after closing and reopening the app. The original nine recipes are included in the app, and any new recipes are loaded from storage.

I also added a message for when the recipe list is empty.


## Module 6 - Working with APIs
For this week, I added another page to My Recipe Book where you can find even more good recipes. I found a website called TheMealDB that has a bunch of different recipes, so I thought it would be a good one to use for my app and to incorporate into it. I just decided to go with chicken and beef recipes for now. It allows the name of each recipe to be shown, what kind of food it is, and where it's from, which is a cool feature if someone is looking for authentic meals from a certain place.

I also made it so you are able to refresh the page if you want to reload all of the recipes. If something would go wrong and they don't show up for some reason, there's a message that lets you try again and it refreshes the page that way. I did test it out to make sure everything was working, and so far it's been working reall good for me.

Here are some items that I used for this week's assignment:

**Website I used:** https://www.themealdb.com/api.php

**Recipe links:**
- https://www.themealdb.com/api/json/v1/1/search.php?s=chicken
- https://www.themealdb.com/api/json/v1/1/search.php?s=beef

**How to run it:** Open the project and run `npm install`, then `npx react-native start`. Open another terminal and run `npx react-native run-android --no-packager`.

**How to check it:** Open the app and click Explore Recipes Online. You can scroll through the recipes or pull down to refresh them.