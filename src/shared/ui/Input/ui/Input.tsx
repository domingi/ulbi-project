import { ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef } from "react";
import cls from './Input.module.scss';
import classNames from "~/shared/lib/classNames/classNames";

type OmittedInputHTMLAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends OmittedInputHTMLAttributes{
  className?: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  isFocus?: boolean;
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
  const { 
    className,
    type = 'text',
    value,
    onChange,
    placeholder,
    isFocus,
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (ref.current && isFocus) {
      ref.current.focus();
    }
  }, [isFocus])
  
  return (
    <div className={classNames(cls.Input, {}, [className])}>
      {placeholder && (<span className={cls.placeholder}>
        {placeholder}{' >'}
      </span>)}
      <input
        ref={ref}
        className={cls.input}
        type={type}
        value={value}
        onChange={inputHandler}
      />
    </div>

  );
});
