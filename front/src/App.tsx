import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import Dashboard from './pages/dashboard/Dashboard';
import { store } from './redux/store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>

    </div>
    </Provider>
  );
}

export default App;
