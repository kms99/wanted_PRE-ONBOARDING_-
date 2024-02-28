import React from 'react';
import Button from '../common/button/Button';
import { useAppDispatch } from '../../hooks/useRTK';
import { NavType } from '../../types/types';
import { changNav } from '../../store/slice/navSlice';

export default function Nav() {
  const dispatch = useAppDispatch();

  const handleChangeNav = (nav: NavType) => {
    dispatch(changNav(nav));
  };

  const BUTTONS_INFO = [
    { text: 'ALL', handler: () => handleChangeNav('ALL') },
    { text: 'NOT DONE', handler: () => handleChangeNav('NOT_DONE') },
    { text: 'DONE', handler: () => handleChangeNav('DONE') },
  ];

  const NAV_BUTTON_ITEMS = BUTTONS_INFO.map((button) => (
    <li key={button.text}>
      <Button isSubmit={false} text={button.text} handler={button.handler} />
    </li>
  ));

  return (
    <nav>
      <ul>{NAV_BUTTON_ITEMS}</ul>
    </nav>
  );
}
