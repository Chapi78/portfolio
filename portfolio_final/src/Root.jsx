import * as React from 'react';

import Home from './routes/Home';
import ErrorPage from "./routes/Error"
import About from "./routes/About"
import Contact from './routes/Contact'
import Skills from './routes/Skills';
import Portfolio from './routes/Portfolio';
import Layout from './navigation/Layout';

import './App.css';
import { 
  Routes,
  Route,
} from "react-router-dom";
import Formation from './routes/Formation';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='Skills' element={<Skills />}/>
        <Route path='portfolio' element={<Portfolio />}/>
        <Route path='formation' element={<Formation />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Route>
    </Routes>
  )
};