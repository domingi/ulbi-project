import { FC, memo } from 'react';
import cls from './CurrencySelect.module.scss';
import { Select } from '~/shared/ui/Select';
import classNames from '~/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CURRENCY } from '../../model/types';

interface CurrencySelectProps {
    className?: string;
    onChange?: (val: CURRENCY) => void;
    value?: CURRENCY;
    disabled?: boolean;
}

export const CurrencySelect: FC<CurrencySelectProps> = memo((
  { 
    onChange,
    className, 
    value = CURRENCY.RUB, 
    disabled, 
  }: CurrencySelectProps) => {
  const { t } = useTranslation('profile');
    
  return (
    <Select 
      label={t('vyberiteV')}
      options={[
        { value: CURRENCY.RUB, label: CURRENCY.RUB },
        { value: CURRENCY.EURO, label: CURRENCY.EURO },
        { value: CURRENCY.USD, label: CURRENCY.USD },
      ]}
      onChange={onChange as (val: string) => void}
      value={value}
      className={classNames(cls.CurrencySelect, {}, [className])}
      disabled={disabled}
    />
  );
});