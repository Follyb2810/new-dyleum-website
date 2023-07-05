import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './component/shared/Layout'
import Home from './component/pages/Home/Index'
import './index.css';
const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
        </Route>
    </Routes>
  )
}

export default Router