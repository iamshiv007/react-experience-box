import React from 'react';
import { DownArrow } from '../icons';
import { Default } from '../utils';

export const ArrowBtn = ({ theme }: { theme: string }) => {
  return (
    <div
      className={`${Default.CSS_NAMESPACE}__down-arrow ${Default.CSS_NAMESPACE}__down-arrow-theme--${theme}`}
    >
      <DownArrow theme={theme} />
    </div>
  );
};