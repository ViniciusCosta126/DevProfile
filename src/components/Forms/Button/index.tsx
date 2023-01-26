import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as C from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}
export const Button: React.FunctionComponent<ButtonProps> = ({
  title,
  ...otherProps
}) => {
  return (
    <C.Container {...otherProps}>
      <C.Title>{title}</C.Title>
    </C.Container>
  );
};
