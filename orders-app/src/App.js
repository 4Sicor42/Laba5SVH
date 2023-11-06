import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import data from './mock-data.json';

import Header from './components/Header';
import Footer from './components/Footer';

import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Modal from './pages/Modal';



function App() {
  const [orders] = useState(data);

  return (
    <Router>
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders orders={orders} /> } />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>

      <Modal />

      <Footer />
    </Router>
  );
}

export default App;

