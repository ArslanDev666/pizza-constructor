import React, { FC, useCallback, useState } from 'react';

import CartInfo from 'components/cart-info';
import PizzaPreview from 'components/pizza-preview';
import { TPizzaSizes } from 'components/pizza-preview/types';
import Tab from 'components/tab';
import { TTab, TTabValues } from 'components/tab/types';
import Title from 'components/title';

import styles from './Constructor.module.css';

import { ReactComponent as PizzaIcon } from 'assets/pizza.svg';
import { ReactComponent as SauceIcon } from 'assets/sauce.svg';
import { ReactComponent as TomatoIcon } from 'assets/tomato.svg';

const tabs: TTab[] = [
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

const Constructor: FC = () => {
  // TODO:: Remove it when I finalize the functionality.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pizzasSize, setPizzasSize] = useState<TPizzaSizes>('small');
  const [activeTab, setActiveTab] = useState<TTabValues>('size');

  const handleTabClick = useCallback((value: TTabValues) => {
    setActiveTab(value);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles['pizza-preview']}>
        <PizzaPreview size={pizzasSize} />
      </div>
      <div className={styles.content}>
        <div>
          <div className={styles.title}>
            <Title>Choose Your Pizza</Title>
          </div>
          <div className={styles.tabs}>
            {tabs.map(({ icon, title, value }) => (
              <Tab
                key={value}
                active={activeTab === value}
                onClick={handleTabClick}
                value={value}
                icon={icon}
                title={title}
              />
            ))}
          </div>
        </div>
        <div className={styles.cart}>
          <CartInfo price={75} weight={450} />
        </div>
        <div className={styles.ingredients}></div>
      </div>
    </div>
  );
};

export default Constructor;
