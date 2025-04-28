import { useTranslation } from "react-i18next";
import { Counter } from "~/entities/Counter/ui/Counter";

const MainPage = () => {
  const { t } = useTranslation('main');
  
  return (
    <>
      <div>{t('glavnayaS')}</div>
      <Counter />
    </>
  )
};

export default MainPage;