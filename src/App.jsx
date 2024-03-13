import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Income from './components/Income';
import Expenditure from './components/Expenditure';
import History from './components/History';
import About from './components/About.jsx';
import Root from './components/Root.jsx';


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
       <Route index element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/expenditure" element={<Expenditure/>}/>
       <Route path="/history" element={<History/>}/>
       <Route path="/income" element={<Income/>}/>

      </Route>
    )
  )
  return (
    
      <div>
    
        <RouterProvider router={router}/>
  
      </div>
    
  );
};

export default App
