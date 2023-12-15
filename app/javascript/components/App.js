import React from 'react'
import Greeting from './Greeting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App=()=>{
return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Greeting/>}/>
    <Route path="*" element={<div>Ups!!</div>}/>
    </Routes>
    </BrowserRouter>
)
};

export default App;
