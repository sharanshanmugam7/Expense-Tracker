import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from './LandingPage';
import Page from './login';
import Register from './SignUp';
import Forgot from './forgot';
import Store from './store';

export default function RouteApp(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/login" element={<Page/>}/>
               
                <Route path="/signup" element={<Register/>}/>
               
                <Route path="/forgot" element={<Forgot/>}/>
                <Route path="/store" element={<Store />}/>
            </Routes>
        </Router>
    )
}