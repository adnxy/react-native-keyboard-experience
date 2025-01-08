import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CustomAvoidView } from 'react-native-keyboard-experience';

export default function App() {
  return (
    <CustomAvoidView>
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    </CustomAvoidView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
