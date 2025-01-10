import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CustomKeyboardAvoidingView from '../../src/KeyboardAvoidExperience';

export default function App() {
  return (
    <CustomKeyboardAvoidingView>
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    </CustomKeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
