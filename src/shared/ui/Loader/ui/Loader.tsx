import { FC } from "react";
import cls from './Loader.module.scss';
import classNames from "~/shared/lib/classNames/classNames";

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({className}: LoaderProps) => {
  return (
    <div className={classNames(cls.Loader, {}, [className])} />
  );
};