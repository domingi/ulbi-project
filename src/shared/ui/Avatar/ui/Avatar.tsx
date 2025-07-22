import { CSSProperties, FC, memo } from "react";
import cls from './Avatar.module.scss';
import classNames from "~/shared/lib/classNames/classNames";

interface AvatarProps {
  path: string;
  alt: string;
  style?: CSSProperties;
  className?: string;
  size?: number;
}

export const Avatar: FC<AvatarProps> = memo(({ path, className, style, alt, size }: AvatarProps) => {
  const styleComponent: CSSProperties = {
    ...style,
    width: size,
    height: size,
  };

  return (
    <img
      className={classNames(cls.Avatar, {}, [className])}
      src={path}
      style={styleComponent}
      alt={alt}
    />
  );
});