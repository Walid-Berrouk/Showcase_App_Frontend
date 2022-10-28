import React, { useEffect } from 'react'
import { Routes, Route, Link, Navigate, Outlet, useParams, useNavigate, useMatch, useLocation } from 'react-router-dom';
import CreateProductPage from '../pages/CreateProductPage';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import Footer from './Footer';
import Navbar from './Navbar';

function Main() {
    return(
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    )
}

export default function Layout() {

    return (
        <Routes>
            <Route path="main" element={<Main />} >
                <Route path="products" exact element={<ProductsPage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="createProduct" element={<CreateProductPage/>} />
            </Route>
            <Route path="signInPortal" element={<SignInPage />} />
            <Route path="signUpPortal" element={<SignUpPage /> } />
            <Route
                path="*"
                element={<Navigate to="/main/home" />}
            />
        </Routes>
    )
}