export interface IPizzaPreviewProps {
  size: TPizzaSizes;
}

export type TPizzaSizes = 'large' | 'medium' | 'small';

export type TPizzaParams = {
  image: string;
  price: number;
  weight: number;
};
