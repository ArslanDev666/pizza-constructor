import React, { ChangeEvent, memo } from 'react';
import cn from 'classnames';

import { TIngredientItem } from 'components/extra-params/types';

import styles from './Ingredient.module.css';

interface IIngredientProps extends TIngredientItem {
  className?: string;
  onChangeCount: (id: number, count: number) => void;
}

const Ingredient = ({
  className,
  image,
  weight,
  title,
  count,
  onChangeCount,
  id,
}: IIngredientProps) => {
  const handleChangeCount = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeCount(id, +e.target.value);
  };

  const handleClickMinusCount = () => {
    onChangeCount(id, count - 1);
  };

  const handleClickPlusCount = () => {
    onChangeCount(id, count + 1);
  };

  return (
    <div className={cn(className, styles.ingredient)}>
      <div className={styles.image}>
        <img src={image} alt={title} />
        <span className={styles.weight}>{weight} g</span>
      </div>
      <div className={styles.count}>
        <button type="button" onClick={handleClickMinusCount} disabled={count - 1 < 0}>
          -
        </button>
        <input
          type="number"
          name="count"
          step={1}
          inputMode="numeric"
          value={count}
          min={0}
          onChange={handleChangeCount}
        />
        <button type="button" onClick={handleClickPlusCount} disabled={count === 50}>
          +
        </button>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default memo(Ingredient);
