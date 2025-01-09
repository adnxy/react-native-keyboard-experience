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

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
