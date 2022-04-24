import React from 'react';
import '../../../css/test.css'


import '../../../css/dashboardMain.css';
import '../../../css/test.css';
function DashboardMain({handleToggleSidebar,}){
  return (
    <main className='main'>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
      
      </div>
      <h1>Dashboard</h1>
    </main>
  );
}

export default DashboardMain;