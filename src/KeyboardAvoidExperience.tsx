import React, { useEffect, useState, useCallback } from 'react';
import {
  Animated,
  Keyboard,
  Platform,
  Dimensions,
  ScrollView,
} from 'react-native';

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

  const calculateHeightAdjustment = (
    event: any,
    keyboardPadding: number,
    isSmallDevice: boolean,
    isAndroid: boolean
  ) => {
    return isAndroid
      ? event.endCoordinates.height +
          keyboardPadding +
          (isSmallDevice ? 100 : 20)
      : event.endCoordinates.height + keyboardPadding;
  };

  const calculateFinalPaddingAndViewOffset = (
    heightAdjustment: number,
    keyboardPadding: number,
    screenHeight: number,
    isSmallDevice: boolean
  ) => {
    const adjustedPadding = keyboardPadding;
    const isFullHeight = heightAdjustment + adjustedPadding >= screenHeight;

    const finalPadding = isFullHeight ? keyboardPadding + 20 : keyboardPadding;
    const viewOffset = isFullHeight
      ? -heightAdjustment
      : isSmallDevice
        ? -heightAdjustment
        : 100;

    return { finalPadding, viewOffset };
  };

  const onKeyboardShow = useCallback(
    (event: any) => {
      const isAndroid = Platform.OS === 'android';
      const { height: screenHeight } = Dimensions.get('window');
      const isSmallDevice = screenHeight < 650;

      const heightAdjustment = calculateHeightAdjustment(
        event,
        keyboardPadding,
        isSmallDevice,
        isAndroid
      );
      const { finalPadding } = calculateFinalPaddingAndViewOffset(
        heightAdjustment,
        keyboardPadding,
        screenHeight,
        isSmallDevice
      );

      Animated.timing(keyboardHeight, {
        toValue: Math.max(heightAdjustment + finalPadding, 0),
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
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <Animated.View
        style={[
          style,
          {
            marginBottom: keyboardHeight,
            transform: [{ translateY: -keyboardHeight }],
          },
        ]}
      >
        {children}
      </Animated.View>
    </ScrollView>
  );
};

export default CustomKeyboardAvoidingView;
