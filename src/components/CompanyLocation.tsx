import React from 'react';
import { LocationSvg } from '../icons';
import { Default } from '../utils';

export const CompanyLocation = () => {
  return (
    <div
      className={`${Default.CSS_NAMESPACE}__company-name-and-location-wrapper`}
    >
      <p className={`${Default.CSS_NAMESPACE}__company-name`}>GOOD TECH MIND</p>
      <p className={`${Default.CSS_NAMESPACE}__location-wrapper`}>
        <LocationSvg /> Kolkata, India
      </p>
    </div>
  );
};