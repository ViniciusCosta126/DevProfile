import * as C from './styles';
import React from 'react';
import { Input } from '../../components/Forms/Input';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from '../../components/Forms/Button';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

interface ScreenNavigationProp {
  navigate: () => void;
}
export const SignUp: React.FunctionComponent = () => {
  const { goBack } = useNavigation<ScreenNavigationProp>();
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
            <Input placeholder="Nome Completo" />
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
            <Button title="Criar conta" />
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
