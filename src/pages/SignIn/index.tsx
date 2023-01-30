import * as C from './styles';
import React from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import { Button } from '../../components/Forms/Button';
import logo from '../../assets/logo.png';
import { useForm, FieldValues } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { InputControl } from '../../components/Forms/InputControl';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}
interface IFormInputs {
  [name: string]: any;
}

const formSchema = yup.object({
  email: yup.string().email('Email invalido').required('Informe o email'),
  password: yup.string().required('Informe a senha'),
});
export const SignIn: React.FunctionComponent = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const handleSignIn = (form: IFormInputs) => {
    const data = {
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
            <View>
              <C.Titlte>Faça seu loguin</C.Titlte>
            </View>

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
            <Button title="Entrar" onPress={handleSubmit(handleSignIn)} />

            <C.ForgotPasswordButton>
              <C.FogotPasswordTitle>Esqueci minha senha!</C.FogotPasswordTitle>
            </C.ForgotPasswordButton>
          </C.Content>
        </C.Container>
      </ScrollView>
      <C.CreateAccount
        onPress={() => {
          navigate('SignUp');
        }}
      >
        <C.Icon name="log-in" />
        <C.CreateAccountTitle>Crie uma conta</C.CreateAccountTitle>
      </C.CreateAccount>
    </KeyboardAvoidingView>
  );
};
