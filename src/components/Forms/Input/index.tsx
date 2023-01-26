import React from 'react';
import { TextInputProps } from 'react-native';
import theme from '../../../Global/styles/theme';
import * as C from './styles';
export const Input: React.FunctionComponent<TextInputProps> = ({
  ...otherProps
}) => {
  return (
    <C.Container placeholderTextColor={theme.colors.gray500} {...otherProps} />
  );
};
