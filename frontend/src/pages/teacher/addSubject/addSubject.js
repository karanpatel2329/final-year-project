import React, { useState,useEffect } from 'react';
import SideNavBar from '../../../mycomponents/teacher/sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import '../../../css/test.css'
import AddSubjectMain from './addSubjectMain';
function Layout() {
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
      <AddSubjectMain
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
    
       />
    </div>
  );
}

export default Layout;