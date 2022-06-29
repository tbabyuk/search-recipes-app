# Search Recipes App

See it live: [Search Recipes App](https://quiet-elf-2a0f6f.netlify.app/)

## Description
A desktop-only web app that helps users search for quick and easy recipes for home cooking. Users search by entering the type of food they would like to cook into a search field. The app then queries an API for that search term and displays all relevant cooking recipes. The user can then select the recipe that interests them most and click to view its ingredients.

## Background & Motivation
The idea for this app stemmed from two separate projects that I had come across in some of the video courses I took. The first was a "Github Finder" app that searched for Github users based on their name, and the other was a cooking app that searched for different cooking recipes but had a different UI. I basically combined the UI from the "Github Finder" app with the functionality of the cooking app and came up with this.

This app helped me review and practice my knowledge of React as well as making API requests and displaying the results.

## Technologies
The current version of this project was done with: 
* HTML 
* CSS
* React
* React Router
* Fetch with async await

## State of Completion
Completed. While it could be improved even furture, I feel I achieved the main functionality I wanted with this app.

## Learning Lessons & Challenges
### Class and Functional Components
I used a combination of class and functional components in this project, mainly to review working with teach type. The main, App.js component was a class component, which is also where I stored the state for the whole app. Most of the other components were functional, including one where I used the useEffect hook (RecipeFeature.js). 

### State
Because this app was relatively small, I did not use a global state manager like Redux, opting instead to store my state in the App.js component and pass it around using props.

### Conditional Rendering with Logical AND Operator
This project reminded me how useful the local AND (&&) operator can be in react to render certain features only if particular conditions are met.

## Summary
Really enjoyed making this one. I would like to clean it up at a future point by perhaps using only one type of components. But again my purpose here was to review working with both types.




