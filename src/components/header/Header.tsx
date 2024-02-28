import React from 'react';
import HeaderDate from './HeaderDate';
import * as St from './header.styled';
import { Dark, Light } from '../../styles/assets/images';
import { useAppDispatch, useAppSelector } from '../../hooks/useRTK';
import { toggleTheme } from '../../store/slice/themeSlice';

export default function Header() {
  const currentTheme = useAppSelector((state) => state.themeSlice.themeMode);
  const dispatch = useAppDispatch();

  const handleToggleTheme = () => dispatch(toggleTheme());

  return (
    <St.HeaderContainer>
      <button onClick={handleToggleTheme}>
        {currentTheme ? <Dark /> : <Light />}
      </button>
      <h1>WANTED PRE-ONBOARDING PRE-MISSION - TODO LIST</h1>
      <HeaderDate />
    </St.HeaderContainer>
  );
}
