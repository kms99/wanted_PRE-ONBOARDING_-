import React from 'react';
import Button from '../common/button/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/useRTK';
import { NavType } from '../../types/types';
import { changNav } from '../../store/slice/navSlice';
import { ButtonStyle } from '../../types/enums';
import * as St from './nav.styled';

export default function Nav() {
  const dispatch = useAppDispatch();
  const currentNav = useAppSelector((state) => state.navSlice.currentNav);

  const handleChangeNav = (nav: NavType) => {
    dispatch(changNav(nav));
  };

  const BUTTONS_INFO = [
    { type: 'ALL', text: 'ALL', handler: () => handleChangeNav('ALL') },
    {
      type: 'NOT_DONE',
      text: 'NOT DONE',
      handler: () => handleChangeNav('NOT_DONE'),
    },
    { type: 'DONE', text: 'DONE', handler: () => handleChangeNav('DONE') },
  ];

  const NAV_BUTTON_ITEMS = BUTTONS_INFO.map((button) => (
    <li key={button.text}>
      <Button
        isSubmit={false}
        text={button.text}
        handler={button.handler}
        btnStyle={
          button.type === currentNav ? ButtonStyle.ACTIVE_NAV : ButtonStyle.NAV
        }
      />
    </li>
  ));

  return (
    <St.Nav>
      <St.NavUl>{NAV_BUTTON_ITEMS}</St.NavUl>
    </St.Nav>
  );
}
