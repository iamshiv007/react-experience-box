import React from 'react';
import { IExperienceContainerProps } from '../@types';
import { ExperienceBox } from './ExperienceBox';

export const ExperienceContainer = ({
  experiences,
  theme = 'light'
}: IExperienceContainerProps) => {
  return (
    <div>
      {experiences.map((expe, i) => {
        return (
          <div key={i}>
            <ExperienceBox {...expe} theme={theme} right={i % 2 !== 0} />
          </div>
        );
      })}
    </div>
  );
};
