import { FC, memo } from 'react';
import cls from './CountrySelect.module.scss';
import { Select } from '~/shared/ui/Select';
import classNames from '~/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { COUNTRY } from '../../model/types';

interface CountrySelectProps {
    className?: string;
    onChange?: (val: COUNTRY) => void;
    value?: COUNTRY;
    disabled?: boolean;
}
const options = [
  { value: COUNTRY.RUSSIA, label: COUNTRY.RUSSIA },
  { value: COUNTRY.GERMANY, label: COUNTRY.GERMANY },
  { value: COUNTRY.USA, label: COUNTRY.USA },
];

export const CountrySelect: FC<CountrySelectProps> = memo((
  { 
    onChange,
    className, 
    value = COUNTRY.RUSSIA, 
    disabled, 
  }: CountrySelectProps) => {
  const { t } = useTranslation('profile');
    
  return (
    <Select 
      label={t('vyberiteG')}
      options={options}
      onChange={onChange as (val: string) => void}
      value={value}
      className={classNames(cls.CountrySelect, {}, [className])}
      disabled={disabled}
    />
  );
});