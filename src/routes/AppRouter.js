import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import PhoneDetail from '../pages/phoneDetail/phoneDetail';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalle/:id" element={<PhoneDetail />} />
        </Routes>
    );
};

export default AppRouter;
