import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation('main');
  
  useEffect(() => {
    if (Math.random() > 0.5) throw Error('ААААААААААА')
  }, [])
  return (
    <>
      <div>{t('glavnayaS')}</div>
    </>
  )
};

export default MainPage;