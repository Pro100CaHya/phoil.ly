import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.css';
import App from '@/app/App';
import { FilterProvider } from './app/providers/FilterProvider';
import { UsersProvider } from './app/providers/UsersProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <UsersProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </UsersProvider>
);
