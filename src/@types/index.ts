export type ITheme = 'light' | 'dark';

export interface IExperienceBoxProps {
  theme: ITheme;
  companyName: string;
  location?: string;
  role?: string;
  fromTo?: string;
}