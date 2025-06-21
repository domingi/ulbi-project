import { FC, memo } from "react";
import cls from './Loader.module.scss';
import classNames from "~/shared/lib/classNames/classNames";

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = memo(({className}: LoaderProps) => {
  return (
    <div className={classNames(cls.Loader, {}, [className])} />
  );
});