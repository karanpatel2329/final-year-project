import React, { useState } from 'react';
import DashboardMain from './main';

function Layout({ setLocale }) {
  const [toggled, setToggled] = useState(false);
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app${toggled ? 'toggled' : ''}`}>
      <SideNavBar
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <DashboardMain
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
       />
    </div>
  );
}

export default Layout;