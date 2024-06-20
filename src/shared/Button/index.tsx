import { Button as ButtonA } from 'antd';
import { FC, MouseEvent } from 'react';
import { ButtonProps } from './interfaces';

export const Button: FC<ButtonProps> = ({ children, ...buttonProps }) => {
    return <ButtonA {...buttonProps}>{children}</ButtonA>;
};
