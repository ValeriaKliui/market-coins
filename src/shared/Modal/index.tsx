import { Modal as ModalA } from 'antd';
import { FC } from 'react';
import { ModalProps } from './interface';
import './index.css';

export const Modal: FC<ModalProps> = ({ ...modalProps }) => {
    return <ModalA {...modalProps} />;
};
