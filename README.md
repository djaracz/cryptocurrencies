# Assumptions

Project is deployed via GH-Pages on [https://djaracz.github.io/selected-cryptocurrencies/](https://djaracz.github.io/selected-cryptocurrencies/)

Application uses [https://www.coingecko.com/en/api/documentation](https://www.coingecko.com/en/api/documentation) API to fetch top 250 Cryptocurrecnies (top market cap)

React SPA is bootstrapped with Create React App

State management is done with Redux

Application contains example React component unit tests (<Autocomplete />)


# Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run deploy`

Updates origin `gh-pages` branch and deploys new instance of SPA