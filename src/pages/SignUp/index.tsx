import * as C from './styles';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from '../../components/Forms/Button';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { InputControl } from '../../components/Forms/InputControl';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
interface ScreenNavigationProp {
  goBack: () => void;
}

interface IFormInputs {
  [name: string]: any;
}

const formSchema = yup.object({
  name: yup.string().required('Inform o nome completo'),
  email: yup.string().email('Email invalido').required('Informe o email'),
  password: yup.string().required('Informe a senha'),
});
export const SignUp: React.FunctionComponent = () => {
  const { goBack } = useNavigation<ScreenNavigationProp>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const handleSignUp = (form: IFormInputs) => {
    const data = {
      name: form.name,
      email: form.email,
      password: form.password,
    };
    console.log(data);
  };
  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <C.Container>
          <C.Content>
            <C.Logo source={logo} />
            <C.Titlte>Crie sua conta</C.Titlte>
            <InputControl
              placeholder="Nome Completo"
              control={control}
              name="name"
              autoCapitalize="none"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputControl
              placeholder="Email"
              control={control}
              name="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              error={errors.email && errors.email.message}
            />
            <InputControl
              placeholder="Senha"
              control={control}
              name="password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              error={errors.password && errors.password.message}
            />
            <Button title="Criar conta" onPress={handleSubmit(handleSignUp)} />
          </C.Content>
        </C.Container>
      </ScrollView>
      <C.BackToSignIn onPress={() => goBack()}>
        <C.Icon name="arrow-left" />
        <C.BackToSignInTitle>Voltar para loguin</C.BackToSignInTitle>
      </C.BackToSignIn>
    </KeyboardAvoidingView>
  );
};
