This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.


-  Here is a list of topics and concepts that are used in the note-taking app :

#1.React Native: The entire app is built using the React Native framework, which allows you to build mobile applications using JavaScript and React.

#2.Navigation: The app uses the @react-navigation/native and @react-navigation/stack packages to handle navigation between different screens. This includes setting up a stack navigator to manage the flow of screens.

#3.AsyncStorage: AsyncStorage is a built-in module in React Native that provides a simple and asynchronous storage system. It's used to store and retrieve notes data in this app.

#4.State Management: The useState hook is used for managing state within functional components. It's used to handle input values and manage the list of notes.

#5.Effects with useEffect: The useEffect hook is used to perform side effects in functional components. It's used to load notes from AsyncStorage and set initial state when the component mounts.

#6.FlatList: The FlatList component is used to efficiently render a scrollable list of notes. It's a performance-optimized alternative to using a traditional ScrollView.

#7.TextInput: The TextInput component is used for accepting input from the user, both for note titles and content.

#8.TouchableOpacity: The TouchableOpacity component is used to create interactive touchable areas that respond to user presses. It's used for both adding new notes and navigating to the note details screen.

#9.Styling with StyleSheet: The StyleSheet module is used to define styles for the components. Styles are defined using a similar syntax to CSS.

#10.Alert: The Alert component is used to show alerts to the user, such as confirming note deletions or displaying messages when a note is copied to the clipboard.

#11.LinearGradient: The LinearGradient component is used to create a gradient background for screens. It enhances the visual appeal of the app.

#12. Clipboard: The Clipboard module from react-native is used to copy text to the device's clipboard. It's used to copy note content in this app.

#13.Long Press Gesture: The app utilizes the long press gesture to trigger actions like deleting a note or copying its content.

#14.Conditional Rendering: Conditional rendering is used to display different UI elements based on conditions, such as rendering note content only if it exists.

#15.Functional Components: The app is built using functional components, which are a modern and preferred way of building UI in React Native.

#16.Props: Components receive data and functionality via props. The navigation prop is used to navigate between screens, and other props are used to pass data between components.

#17..React Hooks: Various hooks such as useState, useEffect, and useFocusEffect are used to manage state and handle component lifecycle and focus.

#18. Data Transformation: The app uses JSON parsing and stringification to save and retrieve note data in AsyncStorage.

#19. Conditional Actions: Different actions (copying, deleting) are triggered based on user interactions, such as presses or long presses.

Project Structure: The codebase is organized into different files and folders to keep the app modular and maintainable.
#   N o t e _ A p p - C U R D - w i t h - r e a c t - n a t i v e 
 
 
