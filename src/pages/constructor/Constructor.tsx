import React, { useState } from 'react';

import PizzaPreview from 'components/pizza-preview';
import { TPizzaSizes } from 'components/pizza-preview/types';

const Constructor = () => {
  // TODO:: Remove it when I finalize the functionality.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pizzasSize, setPizzasSize] = useState<TPizzaSizes>('medium');
  return (
    <div className="constructor">
      <PizzaPreview size={pizzasSize} />
      <div className="title"></div>
      <div className="tabs"></div>
      <div className="ingredients"></div>
      <div className="cart-info"></div>
    </div>
  );
};

export default Constructor;
