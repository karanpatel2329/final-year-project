import React, { useState } from 'react';
import SideNavBar from '../../../mycomponents/teacher/sidebar';
import PaperGenMain from './paperGenMain';
import 'react-pro-sidebar/dist/css/styles.css';
import '../../../css/test.css'

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
      <PaperGenMain
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
       />
    </div>
  );
}

export default Layout;