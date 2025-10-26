import React from 'react';
import { Button as NBButton } from 'native-base';

const Button = (props) => {
  return (
    <NBButton onPress={props.onPress} rounded="full" bg="gray.300" _text={{ fontSize: 'md', fontWeight: 'bold', textTransform: 'uppercase' }}>
      {props.text}
    </NBButton>
  );
};

export default Button;


