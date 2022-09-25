import { TIngredientItem } from 'components/extra-params/types';
import { TTab } from 'components/tab/types';

import cheeseImage from 'assets/images/cheese.png';
import hamImage from 'assets/images/ham.png';
import italianGrassImage from 'assets/images/italian-grass.png';
import mozzarellaImage from 'assets/images/mozzarella.png';
import mushroomsImage from 'assets/images/mushrooms.png';
import parmesanImage from 'assets/images/parmesan.png';
import pepperoniImage from 'assets/images/pepperoni.png';
import pickledCucumbersImage from 'assets/images/pickled-cucumbers.png';
import redOnionImage from 'assets/images/red-onion.png';
import sweetPepperImage from 'assets/images/sweet-pepper.png';
import tomatoImage from 'assets/images/tomato.png';
import { ReactComponent as PizzaIcon } from 'assets/pizza.svg';
import { ReactComponent as SauceIcon } from 'assets/sauce.svg';
import { ReactComponent as TomatoIcon } from 'assets/tomato.svg';

export const ingredients: TIngredientItem[] = [
  {
    image: cheeseImage,
    weight: 70,
    price: 2.5,
    title: 'Cheese',
    count: 0,
    id: 1,
  },
  {
    image: hamImage,
    weight: 80,
    price: 0.5,
    title: 'Ham',
    count: 0,
    id: 2,
  },
  {
    image: italianGrassImage,
    weight: 30,
    price: 1,
    title: 'Italian-grass',
    count: 0,
    id: 3,
  },
  {
    image: mozzarellaImage,
    weight: 50,
    price: 0.6,
    title: 'Mozzarella',
    count: 0,
    id: 4,
  },
  {
    image: mushroomsImage,
    weight: 60,
    price: 1.7,
    title: 'Mushrooms',
    count: 0,
    id: 5,
  },
  {
    image: parmesanImage,
    weight: 70,
    price: 2,
    title: 'Parmesan',
    count: 0,
    id: 6,
  },
  {
    image: pepperoniImage,
    weight: 80,
    price: 1.5,
    title: 'Pepperoni',
    count: 0,
    id: 7,
  },
  {
    image: pickledCucumbersImage,
    weight: 70,
    price: 2.5,
    title: 'Pickled-cucumbers',
    count: 0,
    id: 8,
  },
  {
    image: redOnionImage,
    weight: 50,
    price: 1.5,
    title: 'Red-onion',
    count: 0,
    id: 9,
  },
  {
    image: sweetPepperImage,
    weight: 55,
    price: 25,
    title: 'Sweet-pepper',
    count: 0,
    id: 10,
  },
  {
    image: tomatoImage,
    weight: 80,
    price: 25,
    title: 'Tomato',
    count: 0,
    id: 11,
  },
];

export const tabs: TTab[] = [
  {
    value: 'size',
    icon: <PizzaIcon />,
    title: 'Size',
  },
  {
    value: 'souse',
    icon: <SauceIcon />,
    title: 'Souse',
  },
  {
    value: 'ingredients',
    icon: <TomatoIcon />,
    title: 'Ingredients',
  },
];
