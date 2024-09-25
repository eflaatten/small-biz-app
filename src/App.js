import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

import NavBarContainer from './containers/NavBar';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBarContainer />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
