# Workouts Exploration App

<p align="center">
  <img src="https://user-images.githubusercontent.com/71286765/183487658-07b3b89b-7dd5-49c2-afb8-140267823b2e.png">  
  <img src="https://user-images.githubusercontent.com/71286765/183488145-e0c76e24-daba-42a6-8961-f3c19c06c516.png">
</p>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How I worked on this project
My goal was to build a web application that everyone can benefit from, using some awesome APIs.
- I built this app based on JavaScript Mastery's gym app design: [Screenshot of design](https://user-images.githubusercontent.com/71286765/183489896-cee349d6-214f-4caf-bfdf-40340b891b1f.png)

- I refactored the stateful logic and API data-fetching process to minimize the number of requests, slowing down the consumption of monthly free quota of API calls while speeding up the application: [Example code](src/pages/Home.js)

## How to navigate this project
- The application fetches data from the ExerciseDB API and the Youtube Search And Download API: [Example for the requests](https://github.com/JadeYe2020/workouts_exploration_app/blob/3184fd71d43e03fafbbc72ea00d8ef8945b2e8e3/src/pages/ExerciseDetail.js#L14-L24), [fetchData function](src/utils/fetchData.js)
- Somewhat complex stateful logic: [Example code](https://github.com/JadeYe2020/workouts_exploration_app/blob/3184fd71d43e03fafbbc72ea00d8ef8945b2e8e3/src/components/Search.js#L5-L22)
- Responsive CSS using Material UI's system props: [Example code](https://github.com/JadeYe2020/workouts_exploration_app/blob/3184fd71d43e03fafbbc72ea00d8ef8945b2e8e3/src/components/Navbar.js#L13-L19)

## Why I built the project this way
- Material UI is an open-source React component library that implements Google's Material Design. It's a collection of prebuilt components that are ready for use in production right out of the box. It saved me some time on adjusting the styles and layouts.
- My plan is to become a full-stack developer eventually. But for the beginning I focus on the frontend. That's why I decided to use existing APIs rather than create a custom server. I have basic backend knowledge as well.

## If I had more time I would change this
- Implement the section on the Exercise Detail page to show similar exercises so that users don't need to go back to Home page for searching more related exercises.
- Add end-to-end tests with Cypress.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
