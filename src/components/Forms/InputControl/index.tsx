import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import * as C from './styles';
import { Input } from '../Input';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: string | undefined | any;
}
export const InputControl: React.FunctionComponent<Props> = ({
  control,
  name,
  error,
  ...otherprops
}) => {
  return (
    <C.Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...otherprops} />
        )}
      />
      {error && <C.Error>{error}</C.Error>}
    </C.Container>
  );
};
