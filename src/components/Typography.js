import React from 'react';
import { Text as RNText } from 'react-native';
import propTypes from 'prop-types';

export default Typography = (props) => {
  return (
    <RNText
      style={{
        color: props.color ?? 'black',
        fontSize: props.fontSize ?? 10
      }}
      numberOfLines={props.numberOfLines}
    >
      {props.children}
    </RNText>
  )
}

Typography.propTypes = {
  color: propTypes.string,
  fontSize: propTypes.number,
  children: propTypes.oneOfType([propTypes.string, propTypes.element]).isRequired
}