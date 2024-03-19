import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx';
import Income from './pages/Income.jsx';
import Expenditure from './pages/Expenditure.jsx';
import History from './pages/History.jsx';
import About from './pages/About.jsx';
import Root from './pages/Root.jsx';


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
    
      <React.Fragment>
    
        <RouterProvider router={router}/>
  
      </React.Fragment>
    
  );
};

export default App
