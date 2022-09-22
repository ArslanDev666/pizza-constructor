import { ReactElement } from 'react';

export type TTabValues = 'size' | 'souse' | 'ingredients';

export type TTab = {
  title: string;
  value: TTabValues;
  icon: ReactElement;
};
