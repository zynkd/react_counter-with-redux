# Redux Auth Project

This project is a simple implementation of a Redux authentication process as part of a web application. It consists of 5 components:

- `App`: This is the main functional component of the application, which uses the `isAuthenticated` Redux selector to either display the `Auth` component (for unauthenticated users) or the `UserProfile` component (for authenticated users).

- `Header`: This component displays a header for the application. If a user is currently authenticated, it will display navigation links for 'My Products' and 'My Sales', as well as a 'Logout' button which dispatches a logout action when clicked.

- `Auth`: This component includes a form for users to enter their email address and password to authenticate. If the entered email address is valid and the password is at least 10 characters long, a login action is dispatched.

- `UserProfile`: Simple UI element that displays the user's profile page. This is only accessible when a user is authenticated.

- `Counter` component simply shows a counter that a user can interact with by incrementing, decrementing, adding a specified number to, or toggling its visibility. Each of these methods dispatches an action defined in counter slice of the Redux store.

## Methods Used

This application uses various hooks and methods from the Redux and Redux Toolkit library to manage and interact with the state of the application. Below is a list that includes a short description of each:

- `useSelector`: This hook is used to extract data from the Redux store state. It allows components to access and use any value within the state as a prop.

- `useDispatch`: It is a hook that returns the store’s dispatch function. We use this to dispatch actions from inside our components.

- `createSlice`: This function from Redux Toolkit simplifies the process of generating slice reducers, actions, and selectors. It takes an object of reducer functions, a slice name, and an initial state value, and automatically generates action creators and action types.

- `configureStore`: A function from Redux Toolkit that simplifies the setup of the store. This sets up the store with reducers, middleware, and integrates Redux Devtools Extension.

- `createStore`: This is a Redux method used to create a Redux store that holds the complete state tree of your app. This method was used in previous iterations of the project before transitioning to `configureStore` from Redux Toolkit for its enhanced features and simplified usage.

## Dependencies

This application utilizes the following dependencies:

- `React`: For the user interface
- `Redux Toolkit`: For efficient and easy state management

## Usage

Simply input your email and password in the fields provided and click the 'Login' button. If the entered email and password are valid, you will be authenticated and redirected to your User Profile.

Note: In this example application, there is no real authentication going on. You can enter any valid email address and a password that is *at least 10 characters long* to "authenticate". Validation is done via a simple regex and length check. This is meant to be a basic example of how to implement authentication with Redux, the UI components, and how state management is done with Redux.

## Installation and Setup

To use this application, you will need to clone the repository and install the dependencies:

```bash
git clone https://github.com/username/redux-auth.git
cd redux-auth
npm install
```

Then, run the application in the development mode:

```bash
npm start
```

The application will automatically open in your browser at [http://localhost:3000](http://localhost:3000).

You can also build the app for production by running:

```bash
npm run build
```

The build folder will include all the necessary files to run the application.
