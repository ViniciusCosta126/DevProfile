import React from 'react';
import * as C from './styles';
import avatarDefault from '../../assets/avatar02.png';

export const Home: React.FunctionComponent = () => {
  return (
    <C.Container>
      <C.Header>
        <C.UserWrapper>
          <C.UserInfo>
            <C.UserAvatarButton onPress={() => {}}>
              <C.UserAvatar source={avatarDefault} />
            </C.UserAvatarButton>
            <C.UserInfoDetail>
              <C.UserGreeting>Ola,</C.UserGreeting>
              <C.UserName>Vinicius</C.UserName>
            </C.UserInfoDetail>
          </C.UserInfo>
          <C.Icon name="power" />
        </C.UserWrapper>
      </C.Header>
    </C.Container>
  );
};
