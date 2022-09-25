import React, { FC, useCallback, useMemo, useState } from 'react';

import CartInfo from 'components/cart-info';
import Ingredients from 'components/extra-params';
import PizzaPreview from 'components/pizza-preview';
import { TPizzaSizes } from 'components/pizza-preview/types';
import Tab from 'components/tab';
import { TTabValues } from 'components/tab/types';
import Title from 'components/title';

import { TEST_PIZZA_PARAMS } from 'utils/constants';
import { ingredients, tabs } from 'utils/mock';

import styles from './Constructor.module.css';

const Constructor: FC = () => {
  // TODO:: Remove it when I finalize the functionality.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pizzasSize, setPizzasSize] = useState<TPizzaSizes>('small');
  const [activeTab, setActiveTab] = useState<TTabValues>('size');
  const [ingredientsState, setIngredientsState] = useState(ingredients);

  const { totalPrice, totalWeight } = useMemo(() => {
    const { price, weight } = ingredientsState.reduce(
      (acc, ingredient) => {
        acc.price += ingredient.count * ingredient.price;
        acc.weight += ingredient.count * ingredient.weight;
        return acc;
      },
      { price: 0, weight: 0 },
    );

    return {
      totalPrice: price + TEST_PIZZA_PARAMS[pizzasSize].price,
      totalWeight: weight + TEST_PIZZA_PARAMS[pizzasSize].weight,
    };
  }, [ingredientsState, pizzasSize]);

  const handleTabClick = useCallback((value: TTabValues) => {
    setActiveTab(value);
  }, []);

  const handleUpdateCount = useCallback((id: number, count: number) => {
    setIngredientsState((prevState) =>
      prevState.map((ingredient) => (ingredient.id === id ? { ...ingredient, count } : ingredient)),
    );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles['pizza-preview']}>
          <PizzaPreview size={pizzasSize} />
        </div>
        <div className={styles.content}>
          <div className={styles['left-side']}>
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
            <CartInfo price={totalPrice} weight={totalWeight} />
          </div>
          <div className={styles.ingredients}>
            <Ingredients
              ingredients={ingredientsState}
              onChangeCount={handleUpdateCount}
              activeTab={activeTab}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Constructor;
