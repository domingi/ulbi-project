import { FC } from 'react';
import { Modal } from '~/shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import { loginReducer } from '../../model/slice/loginSlice';
import { DynamicModuleLoader } from '~/shared/lib/DynamicModuleLoader/DynamicModuleLoader';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <DynamicModuleLoader reducerName='loginForm' reducer={loginReducer}>
      <Modal className={className} isOpen={isOpen} onClose={onClose} isLazy>
        <LoginForm />
      </Modal>
    </DynamicModuleLoader>
  );
};

export default LoginModal;