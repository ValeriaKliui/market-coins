import { Button as ButtonA } from 'antd';
import { FC, MouseEvent } from 'react';
import { ButtonProps } from './interfaces';
import { useNavigate } from 'react-router-dom';

export const Button: FC<ButtonProps> = ({ children, ...buttonProps }) => {
    return <ButtonA {...buttonProps}>{children}</ButtonA>;
};
