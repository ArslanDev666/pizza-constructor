import { createHashRouter } from 'react-router-dom';

import HomePage from 'pages/constructor';

export const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);
