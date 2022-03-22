import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import SelectorProvider from 'providers/NavProvider';

ReactDOM.render(
  <SelectorProvider>
  
    <App />

  </SelectorProvider>
  ,
  document.getElementById('root')
);
