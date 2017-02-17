
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import Inventory from './containers/Inventory';

//Needed for material-ui click events
injectTapEventPlugin();

axios.get('/stock').then((data) => {
  const App = () => (
    <MuiThemeProvider>
      <Inventory stock={data.data.data}/>
    </MuiThemeProvider>
  );
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}).catch((error) => console.log(error));
