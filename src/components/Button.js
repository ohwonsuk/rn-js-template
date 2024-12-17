import React from 'react';
import { Pressable } from 'react-native';

export default Button = (props) => {
  return (
    <Pressable
      {...props}
      onPress={props.onPress}
      hitSlop={props.hitSlop ?? { left: 0, right: 0, top: 0, bottom: 0 }}
      style={{
        backgroundColor: props.backgroundColor,
        paddingHorizontal: props.paddingHorizontal,
        paddingVertical: props.paddingVertical
      }}
    >
      {props.children}
    </Pressable>
  )
}