# Chuck Norris App

React App that allows drawing random Chuck Norris jokes. It also allows selection of category of joke and impersonation of Chuck Norris in mentioned jokes. Application also lets you save txt file with up to 100 jokes.

# Link for the app

https://Ciszak-Krzysztof.github.io/ChuckNorrisJokeApp

# Prerequisites for the task

1. Write the application in Typescript (Angular 2+ or React + TS)
2. Make the application available on the internet (via CloudFront, GitHub Pages, or
   similar services)
3. Use a version control system during the project development (GitHub/Bitbucket
   preferably)
4. Include RWD
5. Use any libraries that suit your needs
6. You can find the API documentation here: icndb.com API
7. Don't use pre-made templates (but you can use the starter project template created
   via Angular CLI or create-react-app)
8. Designs and resources can be collected from Frontend Recruitment Task project on
   Zeplin

# Tasks

1. Once the user accesses the website, a random Chuck Norris joke should be displayed.
2. Below the joke, there should be a "Draw a Chuck Norris joke" button that would allow drawing another random Chuck Norris joke.
3. A dropdown list of the available categories (e.g. "explicit", "nerdy") should be displayed next to the button. Once a category is chosen and the user clicks the "Draw a Chuck Norris joke" button, a random joke from the chosen category should be drawn.
4. Below the button, there should be an "Impersonate Chuck Norris" input field. Every time its value changes, the text on the "Draw a Chuck Norris joke" button should dynamically change to "Draw a <input_value> joke". Once the user clicks the button, the new Chuck Norris joke should be drawn, but all instances of "Chuck Norris" in the joke should be replaced with the value put in by the user. For example, if the user types "Michael Jordan" in the input field and clicks the "Draw a Michael Jordan joke", a random Michel Jordan joke should be displayed.
5. Extra points: Create a "Save jokes" button on the bottom of the page. Next to the button, there should be an input field with number type. Once the input value is provided and the user clicks the "Save jokes" button, a number of jokes provided by the user in the input should be downloaded in the .txt file.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
