import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from '~/shared/ui/Button';
import { CopyIcon } from '~/shared/assets/icons/CopyIcon';
import cls from './Code.module.scss';
import classNames from '~/shared/lib/classNames/classNames';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
        <span className={cls.copyIcon}><CopyIcon /></span>
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
