import React, { ReactNode } from 'react';
import { Default } from '../utils';

export const Details = ({ details }: { details: string | ReactNode }) => {
  return <p className={`${Default.CSS_NAMESPACE}__details`}>{details}</p>;
};
