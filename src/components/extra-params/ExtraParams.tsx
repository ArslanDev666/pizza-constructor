import React, { FC } from 'react';

import Ingredients from 'components/params/ingredients';
import { TTabValues } from 'components/tab/types';

import 'keen-slider/keen-slider.min.css';
import styles from './ExtraParams.module.css';

import { TIngredientItem } from './types';

interface IExtraParamsProps {
  activeTab: TTabValues;
  ingredients: TIngredientItem[];
  onChangeCount: (id: number, count: number) => void;
}

const ExtraParams: FC<IExtraParamsProps> = ({ activeTab, ingredients, onChangeCount }) => {
  return (
    <div className={styles.params}>
      {activeTab === 'size' && <h3>Идёт разработка...</h3>}
      {activeTab === 'ingredients' && (
        <Ingredients ingredients={ingredients} onChangeCount={onChangeCount} />
      )}
      {activeTab === 'souse' && <h3>Идёт разработка...</h3>}
    </div>
  );
};

export default ExtraParams;
