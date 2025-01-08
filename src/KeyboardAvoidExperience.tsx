import React, { useEffect, useState, useCallback } from 'react';
import { Animated, Keyboard, Platform } from 'react-native';

const CustomKeyboardAvoidingView = ({
  children,
  style,
  keyboardPadding = -50,
}: {
  children: React.ReactNode;
  style?: object;
  keyboardPadding?: number;
}) => {
  const [keyboardHeight] = useState(new Animated.Value(0));

  const onKeyboardShow = useCallback(
    (event: any) => {
      Animated.timing(keyboardHeight, {
        toValue: event.endCoordinates.height + keyboardPadding,
        duration: event.duration || 250,
        useNativeDriver: false,
      }).start();
    },
    [keyboardHeight, keyboardPadding]
  );

  const onKeyboardHide = useCallback(() => {
    Animated.timing(keyboardHeight, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [keyboardHeight]);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      onKeyboardShow
    );
    const keyboardHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      onKeyboardHide
    );

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, [onKeyboardShow, onKeyboardHide]);

  return (
    <Animated.View style={[style, { marginBottom: keyboardHeight }]}>
      {children}
    </Animated.View>
  );
};

export default CustomKeyboardAvoidingView;
