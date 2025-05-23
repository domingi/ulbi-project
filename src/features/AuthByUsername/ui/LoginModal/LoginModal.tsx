import { FC } from 'react';
import { Modal } from '~/shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal className={className} isOpen={isOpen} onClose={onClose} isLazy>
      <LoginForm />
    </Modal>
  );
};