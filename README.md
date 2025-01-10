# keyboard-avoid-experience

React Native Seamless and animated keyboard avoiding view for iOS and Android.

 `Works consistently with ScrollView, FlatList, SectionList, and any other React Native components.`

## DEMO

[Demo Video](https://www.youtube.com/shorts/E59--rHLOHA?feature=share)

## Installation

```sh
npm install react-native-keyboard-experience
```

## Usage

To use the `CustomKeyboardAvoidingView`, import it into your component and wrap your content with it. You can customize the keyboard padding if needed.

```typescript
import CustomKeyboardAvoidingView from 'react-native-keyboard-experience';

const App = () => {
  return (
    <CustomKeyboardAvoidingView >
        <Text>Welcome to the Keyboard Avoiding Experience!</Text>
    </CustomKeyboardAvoidingView>
  );
};

export default App;
```

## Props

- `children`: The content to be displayed inside the keyboard avoiding view (required).
- `style`: Custom styles for the container (optional).
- `keyboardPadding`: Additional padding to be applied when the keyboard is shown (default is `-50 ios` and `-250 android`).
- `duration`: The duration of the animation (default is `250`).

## Contributing

We welcome contributions! To contribute to this project, please follow these steps:

1. **Clone the repository**: Use the following command to clone the repository to your local machine:
   ```sh
   git clone https://github.com/your-username/keyboard-avoid-experience.git
   ```
2. **Create a new branch**: Create a new branch for your feature or bug fix:
   ```sh
   git checkout -b your-feature-branch
   ```
3. **Make your changes**: Implement your changes and ensure that your code adheres to the project's coding standards.
4. **Commit your changes**: Commit your changes with a descriptive message:
   ```sh
   git commit -m "Add a brief description of your changes"
   ```
5. **Push your changes**: Push your changes to your repository:
   ```sh
   git push origin your-feature-branch
   ```
6. **Create a pull request**: Go to the original repository and click on the "New Pull Request" button. Select your branch and submit the pull request.

## License

MIT

---

Made with ❤️ to the RN community.
