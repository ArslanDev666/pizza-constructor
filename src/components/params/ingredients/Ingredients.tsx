import React, { FC, memo, useState } from 'react';
import classNames from 'classnames';
import { useKeenSlider } from 'keen-slider/react';

import { TIngredientItem } from 'components/extra-params/types';
import Ingredient from 'components/ingredient';

import { ELEMENTS_SPACING, ELEMENTS_VIEW } from 'utils/constants';

import styles from './ingredients.module.css';

import { ReactComponent as ArrowLeftIcon } from 'assets/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/arrow-right.svg';

interface IIngredientsProps {
  ingredients: TIngredientItem[];
  onChangeCount: (id: number, count: number) => void;
}

const Ingredients: FC<IIngredientsProps> = ({ ingredients, onChangeCount }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: ELEMENTS_VIEW,
      spacing: ELEMENTS_SPACING,
    },
    drag: false,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const isLoaded = loaded && !!instanceRef.current;

  const handleClickPrevSlider = () => {
    instanceRef.current?.prev();
  };

  const handleClickNextSlider = () => {
    instanceRef.current?.next();
  };

  return (
    <>
      <button
        className={styles.arrow}
        disabled={!isLoaded || currentSlide === 0}
        onClick={handleClickPrevSlider}
      >
        <ArrowLeftIcon />
      </button>

      <div
        ref={sliderRef}
        className={classNames('keen-slider', styles.carousel, { [styles.show]: isLoaded })}
      >
        {ingredients.map((ingredient) => (
          <Ingredient
            className="keen-slider__slide"
            onChangeCount={onChangeCount}
            key={ingredient.id}
            {...ingredient}
          />
        ))}
      </div>

      <button
        className={styles.arrow}
        onClick={handleClickNextSlider}
        disabled={!isLoaded || currentSlide === instanceRef.current?.track.details.maxIdx}
      >
        <ArrowRightIcon />
      </button>
    </>
  );
};

export default memo(Ingredients);
