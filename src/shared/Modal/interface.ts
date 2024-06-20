import { Coin } from '@store/services/coinsApi/interfaces';
import { ModalProps as ModalPropsA } from 'antd';

export interface ModalProps extends ModalPropsA {
    choosenCurrency: Coin | null;
}
