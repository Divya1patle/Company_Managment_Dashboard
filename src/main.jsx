// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './component/Layout';
import Company from './component/Company.jsx';
import CompanyList from './component/CompanyList.jsx';
import CompanyDetails from './component/ComapanyDetails.jsx';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/company',
        element: <Company />,
        children: [
          {
            path: 'list',
            element: <CompanyList />,
          },
          {
            path: ':id',
            element: <CompanyDetails />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
);
