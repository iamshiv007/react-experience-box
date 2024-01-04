import React from 'react';
import { Default } from '../utils';

export const RoleFromto = ({ theme }: { theme: string }) => {
  return (
    <div
      className={`${Default.CSS_NAMESPACE}__role-and-fromto-wrapper ${Default.CSS_NAMESPACE}__role-and-fromto-wrapper-theme--${theme}`}
    >
      <p className={`${Default.CSS_NAMESPACE}__role`}>MERN STACK INTERN</p>
      <p>Aprile 2023 - June 2023</p>
    </div>
  );
};