import { Suspense } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import './styles/index.scss';
import classNames from '~/shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AboutPage } from '~/pages/AboutPage';
import { MainPage } from '~/pages/MainPage';
import { Navbar } from '~/widgets/Navbar/ui/Navbar';

const App = () => {
    const { theme } = useTheme();
    return (
            <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </Suspense>
            </div>
    )
};

export default App;