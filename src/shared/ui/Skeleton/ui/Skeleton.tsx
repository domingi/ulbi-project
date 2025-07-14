import { CSSProperties, FC, memo } from 'react';
import cls from './Skeleton.module.scss';
import classNames from '~/shared/lib/classNames/classNames';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    borderRadius?: string;
}

export const Skeleton: FC<SkeletonProps> = memo((props: SkeletonProps) => {
  const {
    className,
    height,
    width,
    borderRadius,
  } = props;

  const style: CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return (
    <div 
      className={classNames(cls.Skeleton, {}, [className, cls.shimmer])}
      style={style}
    />
  );
});
