import { Link } from 'react-router-dom';
import './styles/index.scss';
import classNames from '~/shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router/ui/AppRouter';

const App = () => {
    const { theme } = useTheme();
    return (
            <div className={classNames('app', {}, [theme])}>
            <AppRouter />
            <Link to="/about">О проекте</Link>
            <Link to="/">Главная</Link>
            </div>
    )
};

export default App;