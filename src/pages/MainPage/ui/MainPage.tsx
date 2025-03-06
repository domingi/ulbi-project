import { useTheme } from "~/app/providers/ThemeProvider";

const MainPage = () => {
    const { toggleTheme } = useTheme();

    return (
                <><div>Главная</div><button onClick={toggleTheme}>Поменять тему</button></>
    )
};

export default MainPage;