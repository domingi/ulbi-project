import { Suspense } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import './styles/index.scss';
import classNames from '~/shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AboutPage } from '~/pages/AboutPage';
import { MainPage } from '~/pages/MainPage';

const App = () => {
    const { theme } = useTheme();
    return (
            <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>
                <Link to="/about">О проекте</Link>
                <Link to="/">Главная</Link>
            </Suspense>
            </div>
    )
};

export default App;