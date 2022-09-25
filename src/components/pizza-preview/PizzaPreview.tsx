import React, { FC, memo, useState } from 'react';

import { TEST_PIZZA_PARAMS } from 'utils/constants';

import styles from './PizzaPreview.module.css';

import { ReactComponent as PizzaIcon } from 'assets/pizza.svg';

import { IPizzaPreviewProps } from './types';

const PizzaPreview: FC<IPizzaPreviewProps> = ({ size }) => {
  const [isLoadingImages, setIsLoadingImages] = useState(true);

  const handleLoadImage = () => {
    setIsLoadingImages(false);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.size} ${styles.large}`}>
        <span>Large</span>
      </div>
      <div className={`${styles.size} ${styles.medium}`}>
        <span>Medium</span>
      </div>
      <div className={`${styles.size} ${styles.small}`}>
        <span>Small</span>
      </div>

      {isLoadingImages && (
        <div className={styles['loading-image']}>
          <PizzaIcon />
        </div>
      )}

      <div
        className={`${styles['pizza-image']} ${styles[`pizza-${size}`]}`}
        hidden={isLoadingImages}
      >
        <img src={TEST_PIZZA_PARAMS[size].image} alt={`Pizza ${size}`} onLoad={handleLoadImage} />
      </div>
    </div>
  );
};

export default memo(PizzaPreview);
