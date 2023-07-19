import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/shared/Layout';
import Loading from './component/shared/Loading';
import './index.css';

const Home = lazy(() => import('./component/pages/Home/Index'));

function Router() {
  return (
    <Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </Suspense>
  );
}

export default Router;