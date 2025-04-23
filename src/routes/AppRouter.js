import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import PhoneDetail from '../pages/phoneDetail/PhoneDetail';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalles/:id" element={<PhoneDetail />} />
        </Routes>
    );
};

export default AppRouter;
