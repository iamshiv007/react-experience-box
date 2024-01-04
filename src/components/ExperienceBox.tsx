import React, { FC } from 'react';
import { Default } from '../utils';
import { IExperienceBoxProps } from '../@types';
import { CompanyLocation } from './CompanyLocation';
import { RoleFromto } from './RoleFromto';
import { Details } from './Details';
import { ArrowBtn } from './ArrowBtn';

export const ExperienceBox: FC<IExperienceBoxProps> = ({ theme = 'light' }) => {
  return (
    <div
      className={`${Default.CSS_NAMESPACE}__main-container ${Default.CSS_NAMESPACE}__main-container-theme--${theme}`}
      key="Good Tech MIND"
    >
      <div
        className={`${Default.CSS_NAMESPACE}__container ${Default.CSS_NAMESPACE}__container-theme--${theme}`}
      >
        <CompanyLocation />

        <RoleFromto theme={theme} />

        <Details />
      </div>

      <ArrowBtn theme={theme} />
    </div>
  );
};
