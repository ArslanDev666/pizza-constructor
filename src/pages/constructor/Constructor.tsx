import React, { FC, useState } from 'react';

import PizzaPreview from 'components/pizza-preview';
import { TPizzaSizes } from 'components/pizza-preview/types';
import Title from 'components/Title';

import styles from './Constructor.module.css';

const Constructor: FC = () => {
  // TODO:: Remove it when I finalize the functionality.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pizzasSize, setPizzasSize] = useState<TPizzaSizes>('medium');
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
          <div className="tabs"></div>
        </div>
        <div className={styles.cart}>
          <div className="cart-info"></div>
        </div>
        <div className={styles.ingredients}></div>
      </div>
    </div>
  );
};

export default Constructor;
