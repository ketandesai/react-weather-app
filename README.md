# Table of Contents

- **[Working Demo](https://github.com/ketandesai/react-weather-app#-getting-started)**

- **[Getting Started](https://github.com/ketandesai/react-weather-app#-getting-started)**

- **[What's inside?](https://github.com/ketandesai/react-weather-app#-whats-inside)**

- **[Architecture](https://github.com/ketandesai/react-weather-app#-architecture)**

- **[Learn More](https://github.com/ketandesai/react-weather-app#learn-more)**

- **[Motivation](https://github.com/ketandesai/react-weather-app#-motivation)**

- **[Technologies](https://github.com/ketandesai/react-weather-app#-technologies)**

- **[Challenges](https://github.com/ketandesai/react-weather-app#-challenges)**

- **[Roadmap](https://github.com/ketandesai/react-weather-app#-roadmap)**

- **[Contribution](https://github.com/ketandesai/react-weather-app#-contribution)**

- **[License](https://github.com/ketandesai/react-weather-app#-license)**

- **[Contact](https://github.com/ketandesai/react-weather-app#-contact)**

- **[Featured](https://github.com/ketandesai/react-weather-app#-featured-on)**

- **[Acknowledgements](https://github.com/ketandesai/react-weather-app#-acknowledgements)**

# Working Demo

For a working version of this application visit the following **[link](https://react-weather-app-orcin.vercel.app)**

# 🚀 Getting Started

**Sign up for an [OpenWeather](https://openweathermap.org/) account.**

**Sign up for a [MapBox](https://www.mapbox.com/) account.**

## Basic Setup

- Clone the main branch in the repository

```bash

git clone https://github.com/ketandesai/react-weather-app.git

```

- Install the packages using the command `yarn install`

## **Environment File**

- Create a `.env` file in the root directory of the project. Add the following properties in it:

  ```bash

  REACT_APP_OPEN_WEATHER_API_KEY = <your OpenWeather API Key>

  REACT_APP_MAP_BOX_API_KEY = <your MapBox API Key>

  ```

  _That's it! You can run the below available scripts to get up and running on localhost. If you want to dive deeper into the codebase, I recommend you to check the architecture documentation to customize this application as you wish._

> _These instructions are very important to avoid the **Blank Page** issue when running the application on `http://localhost:3000`._

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## 🧐 What's inside?

A quick look at the top-level files and directories in this react-weather-app project.

```
├── public
├── src
	├── api
	├── app
	├── components
	├── reducers
	├── fonts
	├── styles
	├── tests
├── App.js
├── index.js
```

1.  **`public`**: This directory contain all the assets like images, icons, manifest (PWA), and favicons.
2.  **`src`**: This directory contain all of the code related to what you see on the front-end of the application. `src` is a convention for “source code”.
    - **`api`**: This directory contains external api urls that are consumed by the app.
    - **`app`**: This directory contains the store.js for the Redux store
    - **`components`**: This directory contains several React components.
    - **`reducers`**: This directory contains several Redux reducers for managing state throughout the application.
    - **`fonts`**: This directory contain font files related to several font variations and formats.
    - **`sass`**: This directory contain the application styles written in `scss` grouped into several directories.
    - **`styles`**: This directory contain only two files `main.css` (styles used in development) and `style.css` (styles used in production).
    - **`tests`**: This directory contain test suites with each file containing several test cases testing a utility function or a component.
3.  - **`App.js`**: This is the main React component that is rendered in the DOM which contain the containers & components as well as routing.
4.  - **`index.js`**: This is the first file which gets run in the browser after starting the application. `App.js` component rendering as well as `serviceworker` registration process takes place in this file.

## 📖 Architecture

![React Weather Application Architecture](./architecture.svg)

![Application Architecture Live](./architecture_Live.png) Coming Soon

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## 💡 Motivation

I started learning React and Redux in 2020 and wanted apply my knowledge by developing an application. I decided on building an application that consumes an API for data so I could focus on writing efficient React and Redux code keeping performance, UX, maintainability, scalability, and optimization in mind.

There are many weather applications available today. The goal was to learn from some of the best and apply them to this application and create a good user experience.

## 💻 Technologies

-This project was bootstrapped with **[Create React App](https://github.com/facebook/create-react-app)**, using the **[Redux](https://redux.js.org/)** and **[Redux Toolkit](https://redux-toolkit.js.org/)** template.

-**[OpenWeather](https://openweathermap.org/)**

-**[MapBox](https://www.mapbox.com/)**

- Tailwind CSS? **[TailwindCSS](https://tailwindcss.com/)**

- Style Components?

## 😢 Challenges

- Redux has a high learning curve, but the benefits it offers in simplifying state management were worth the extra effort. By using Redux I was able to write more efficient and re-usable React components.

- challenge 2

- challenge 3

## 🏎 Roadmap

- [x] Add docker integration

- [ ] Unit Testing

- [ ] Add documentation for components using **Storybook**

- [ ] Publish this project as an NPM package that can be consumed elsewhere.

- [ ] Add user preferences, favorites, saved to a database to make this a full stack application

## 🙌 Contribution

- Open pull request with improvements.

- If you have any new idea, check the **[feature request](https://github.com/ketandesai/react-weather-app/blob/main/.github/ISSUE_TEMPLATE/feature_request.md)** template to create a request.

- If you found any issue or a bug, check the **[bug report](https://github.com/ketandesai/react-weather-app/blob/main/.github/ISSUE_TEMPLATE/bug_report.md)** template to create a report.

## 📃 License

Have a look at the **[license file](https://github.com/ketandesai/react-weather-app/blob/main/LICENSE)** for details

## 📧 Contact

Whether you’d like to discuss a project, ask me about my website or simply say “hello”, I’d love to hear from you.

## 😍 Featured On

- **coming soon**

## 🙏 Acknowledgements

See the **[Acknowledgements](https://github.com/ketandesai/react-weather-app/wiki/Acknowledgements)** page on the wiki for a list of Acknowledgements for Weather React codebase.
