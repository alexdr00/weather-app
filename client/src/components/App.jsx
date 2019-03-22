import React from 'react';
import ApplicationBar from './ApplicationBar';


const App = ({ children }) => (
  <div style={{ fontFamily: 'Roboto' }}>
    <ApplicationBar/>

    {children}
  </div>
);

export default App;
