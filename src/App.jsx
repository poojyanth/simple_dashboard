import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/0"/>}/>
        <Route exact path="/:index" element={<Dashboard/>}/>
      </Routes>
        {/* Add other routes as needed */}
    </Router>
  );
};

export default App;
