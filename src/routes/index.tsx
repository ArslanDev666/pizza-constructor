import { createBrowserRouter } from 'react-router-dom';

import HomePage from 'pages/constructor';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);
