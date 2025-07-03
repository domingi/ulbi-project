import { FC, memo } from "react";
import cls from './Select.module.scss';
import classNames from "~/shared/lib/classNames/classNames";
import { Text } from '~/shared/ui/Text';


interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  className?: string;
  disabled?: boolean;
}

export const Select: FC<SelectProps> = memo((
  {
    label,
    className,
    options,
    value,
    onChange,
    disabled = false,
  }: SelectProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.Select, {}, [className])}>
      {label && <Text className={cls.label} text={`${label} >`} />}
      <select
        className={cls.wrapper}
        onChange={onChangeHandler}
        value={value}
        disabled={disabled}
      >
        {options.map((item: SelectOption) => (
          <option
            key={item.label}
            value={item.value}
          >
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
});