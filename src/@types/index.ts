import { ReactNode } from 'react';

export type ITheme = 'light' | 'dark';

export interface IExperienceBoxProps {
  companyName: string;
  location?: string;
  role?: string;
  fromTo?: string;
  details: string | ReactNode;
  right?: boolean;
  theme?: ITheme;
}

export interface IExperienceContainerProps {
  experiences: IExperienceBoxProps[];
  theme?: ITheme;
}
