import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Overview from './pages/overview';
import Components from './pages/components';
import CreateComponent from './pages/components/create';
import APIs from './pages/APIs';
import CreateAPI from './pages/CreateAPI';
import APIDetails from './pages/APIDetails';
import CreateRoute from './pages/api/CreateRoute';
import Deployments from './pages/Deployments';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components/create" element={<CreateComponent />} />
          <Route path="/apis" element={<APIs />} />
          <Route path="/apis/create" element={<CreateAPI />} />
          <Route path="/apis/:apiName" element={<APIDetails />} />
          <Route path="/apis/:apiName/routes/new" element={<CreateRoute />} />
          <Route path="/deployments" element={<Deployments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;