import { ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef } from "react";
import cls from './Input.module.scss';
import classNames from "~/shared/lib/classNames/classNames";

type OmittedInputHTMLAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'readOnly'>;

interface InputProps extends OmittedInputHTMLAttributes{
  className?: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  isFocus?: boolean;
  readonly?: boolean;
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
  const { 
    className,
    type = 'text',
    value,
    onChange,
    placeholder,
    isFocus,
    readonly = false,
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const mods = {
    [cls.readonly]: readonly,
  }
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (ref.current && isFocus) {
      ref.current.focus();
    }
  }, [isFocus])
  
  return (
    <div className={classNames(cls.Input, mods, [className])}>
      {placeholder && (<span className={cls.placeholder}>
        {placeholder}{' >'}
      </span>)}
      <input
        ref={ref}
        className={cls.input}
        type={type}
        value={value}
        onChange={inputHandler}
        readOnly={readonly}
      />
    </div>

  );
});
