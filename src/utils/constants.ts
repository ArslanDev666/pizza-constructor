import { TPizzaParams, TPizzaSizes } from 'components/pizza-preview/types';

export const ELEMENTS_VIEW = 6;
export const ELEMENTS_SPACING = 20;

export const TEST_PIZZA_PARAMS: Record<TPizzaSizes, TPizzaParams> = {
  small: {
    image: 'https://pngimg.com/uploads/pizza/pizza_PNG44095.png',
    price: 7.15,
    weight: 400,
  },
  medium: {
    image: 'https://pngimg.com/uploads/pizza/pizza_PNG44095.png',
    price: 8.05,
    weight: 600,
  },
  large: {
    image: 'https://pngimg.com/uploads/pizza/pizza_PNG44095.png',
    price: 9.07,
    weight: 800,
  },
};
