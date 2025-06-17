import classNames from '~/shared/lib/classNames/classNames';
import { useTheme } from '~/app/providers/ThemeProvider';
import { AppRouter } from '~/app/providers/router';
import { Navbar } from '~/widgets/Navbar';
import { Sidebar } from '~/widgets/Sidebar';
import { useEffect } from 'react';
import { userActions } from '~/entities/User';
import { useDispatch } from 'react-redux';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthDate());
  }, [])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
};

export default App;