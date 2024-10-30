import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home';
import { ProductPage } from './pages/ProductPage.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/product/:id',
        element: <ProductPage />,
      },
      {
        path: '/products/category/:category',
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
