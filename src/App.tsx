import { Suspense } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage.async';
import { CounterPageAsync } from './pages/CounterPage.async';
import { MainPageAsync } from './pages/MainPage.async';

const App = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/about" element={<AboutPageAsync />} />
                <Route path="/counter" element={<CounterPageAsync />} />
                <Route path="/" element={<MainPageAsync />} />
            </Routes>
            <Link to="/about">О проекте</Link>
            <Link to="/counter">Счетчик</Link>
            <Link to="/">Главная</Link>
        </Suspense>
    )
};

export default App;