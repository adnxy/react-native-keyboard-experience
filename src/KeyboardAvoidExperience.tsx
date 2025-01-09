import React, { useEffect, useState, useCallback } from 'react';
import { Animated, Keyboard, Platform } from 'react-native';

const CustomKeyboardAvoidingView = ({
  children,
  style,
  keyboardPadding = Platform.OS === 'ios' ? -50 : -250,
}: {
  children: React.ReactNode;
  style?: object;
  keyboardPadding?: number;
}) => {
  const [keyboardHeight] = useState(new Animated.Value(0));

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onKeyboardShow = useCallback(
    (event: any) => {
      const isAndroid = Platform.OS === 'android';
      const heightAdjustment = isAndroid
        ? event.endCoordinates.height + keyboardPadding + 20
        : event.endCoordinates.height + keyboardPadding;
      Animated.timing(keyboardHeight, {
        toValue: heightAdjustment,
        duration: event.duration || 250,
        useNativeDriver: false,
      }).start();
    },
    [keyboardHeight, keyboardPadding]
  );

  const onKeyboardHide = useCallback(() => {
    const isAndroid = Platform.OS === 'android';
    const resetValue = isAndroid ? 20 : 0;
    Animated.timing(keyboardHeight, {
      toValue: resetValue,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [keyboardHeight]);

  return (
    <Animated.View style={[style, { marginBottom: keyboardHeight }]}>
      {children}
    </Animated.View>
  );
};

export default CustomKeyboardAvoidingView;
