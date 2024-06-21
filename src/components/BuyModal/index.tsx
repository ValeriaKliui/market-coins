import { PriceExchanger } from '@components/PriceExchanger';
import { Modal } from '@shared/Modal';
import { ModalProps } from '@shared/Modal/interface';
import { FC, useEffect, useState } from 'react';

export const BuyModal: FC<ModalProps> = ({ price, ...modalProps }) => {
    return (
        <Modal {...modalProps}>
            <PriceExchanger price={price} />
        </Modal>
    );
};
