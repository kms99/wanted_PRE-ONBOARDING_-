import React from 'react';
import HeaderDate from './HeaderDate';
import * as St from './header.styled';

export default function Header() {
  return (
    <St.HeaderContainer>
      <h1>WANTED PRE-ONBOARDING PRE-MISSION - TODO LIST</h1>
      <HeaderDate />
    </St.HeaderContainer>
  );
}
