import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaHome,FaNewspaper,FaListAlt } from 'react-icons/fa';
import 'react-pro-sidebar/dist/css/styles.css';
import hkbkLogo from '../../assets/hkbkLogo.png'
const SideNavBar = ({ toggled, handleToggleSidebar }) => {
  
  return (
    <ProSidebar
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
         <img src={hkbkLogo} alt="college logo" />
      </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu >
          <MenuItem active={true} icon={<FaHome />}><a href="/teacher/dashboard">Dashboard</a></MenuItem>
        </Menu>
        <Menu >
          <MenuItem active={false} icon={<FaNewspaper />}><a href='/teacher/addSubject'>Add Subject</a></MenuItem>
        </Menu>
        <Menu >
          <MenuItem icon={<FaListAlt />}><a href="/teacher/questionSet">Question Set</a></MenuItem>
        </Menu>
        
        <Menu >
          <MenuItem icon={<FaNewspaper />}><a href="/teacher/paperGen">Paper Generator</a></MenuItem>
        </Menu>
        
        
      </SidebarContent>

      
    </ProSidebar>
  );
};

export default SideNavBar;