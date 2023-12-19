import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import data from './mock-data.json';

import Header from './components/Header';
import Footer from './components/Footer';

import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Orders from './pages/Orders';
import NotFound from './pages/NotFound'

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  const [orders] = useState(data);

  return (
        <Router>
          <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
             <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/orders" element={<Orders orders={orders} /> } />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path='*' element={<NotFound/>} />
                </Routes>
              </main>
            </ThemeProvider>
          <Footer />
        </Router>
  );
}

export default App;

