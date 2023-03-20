import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';

import './styles.css';

export const Default = () => (
  <div className="layout">
    <Sidebar />

    <div className="content">
      <Outlet />
    </div>
  </div>
);
