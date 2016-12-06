
import React from 'react';
import SidebarContainer from './sidebar/sidebar_container';

const App = (props) => (
  <div>
    <SidebarContainer router={ props.router }/>
    { props.children }
  </div>
);

export default App;
