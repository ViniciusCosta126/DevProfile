import * as C from './styles';
import React from 'react';
import { Input } from '../../components/Forms/Input';
import { ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import { Button } from '../../components/Forms/Button';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

export const SignIn: React.FunctionComponent = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();
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

            <Input placeholder="Email" />
            <Input placeholder="Senha" />
            <Button title="Entrar" />

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
