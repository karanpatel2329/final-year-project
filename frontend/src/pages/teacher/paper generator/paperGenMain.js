import React from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';
import { FaHeart, FaBars } from 'react-icons/fa';
import '../../../css/test.css'


import '../../../css/dashboardMain.css';
import '../../../css/test.css';
function PaperGenMain({handleToggleSidebar,}){
  return (
    <main className='main'>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
      
      </div>
      <h1>Paper Generator Main</h1>
    </main>
  );
}

export default PaperGenMain;