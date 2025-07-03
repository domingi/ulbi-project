import { FC, memo } from "react";
import cls from './Avatar.module.scss';
import classNames from "~/shared/lib/classNames/classNames";

interface AvatarProps {
  path: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
}

export const Avatar: FC<AvatarProps> = memo(({ path, className, style, alt }: AvatarProps) => {
  return (
    <img
      className={classNames(cls.Avatar, {}, [className])}
      src={path}
      style={style}
      alt={alt}
    />
  );
});