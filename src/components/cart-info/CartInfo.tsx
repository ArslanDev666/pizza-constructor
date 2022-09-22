import React, { FC, memo } from 'react';

import styles from './CartInfo.module.css';

interface ICartInfoProps {
  price: number;
  weight: number;
}

const CartInfo: FC<ICartInfoProps> = ({ price, weight }) => {
  return (
    <div className={styles.cart}>
      <h3 className={styles.price}>$ {price.toFixed(2)}</h3>
      <span className={styles.weight}>{weight} g</span>
      <button className={styles.add}>Add to Cart</button>
    </div>
  );
};

export default memo(CartInfo);
