import { FC, useCallback, useEffect, useRef, useState } from "react";
import cls from './Modal.module.scss';
import classNames from "~/shared/lib/classNames/classNames";
import { Portal } from "~/shared/ui/Portal";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const ANIMATION_DELAY = 200;

export const Modal: FC<ModalProps> = ({className, children, isOpen, onClose}: ModalProps) => {
  const [ isClosing, setIsClosing] = useState(false);
  const timeoutId = useRef<ReturnType<typeof setTimeout>>(null);

  const onCloseHandler = useCallback(() => {
    setIsClosing(true);

    timeoutId.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, ANIMATION_DELAY);
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCloseHandler();
    }
  }, [onCloseHandler]);

  const mods: Record<string, boolean> = {
    [cls.isOpen]: isOpen,
    [cls.isClosing]: isClosing,
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timeoutId.current);
      window.removeEventListener('keydown', onKeyDown);
    }
  }, [isOpen, onKeyDown])

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={classNames(cls.overlay, {}, [className])} onClick={onCloseHandler}>
          <div className={classNames(cls.content, {}, [className])} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </Portal>

  );
};