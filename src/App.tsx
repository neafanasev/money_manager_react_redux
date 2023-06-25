import React from 'react';
import {Route, Routes} from "react-router-dom";

import Categories from "./components/Categories/Categories";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
    return (<>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Categories/>}/>
            <Route path='*' element={<div>404 NOT FOUND</div>}/>
        </Routes>
</>)}

export default App