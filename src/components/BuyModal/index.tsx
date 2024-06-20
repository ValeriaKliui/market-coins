import { InputNumber } from '@shared/InputNumber';
import { ModalProps } from '@shared/Modal/interface';
import { Modal } from 'antd';
import { FC, useState } from 'react';

export const BuyModal: FC<ModalProps> = ({
    choosenCurrency,
    ...modalProps
}) => {
    const initialUsdAmount = Number(choosenCurrency?.priceUsd) || 1;
    const [currencyAmount, setCurrencyAmount] = useState(1);
    const [usdAmount, setUsdAmount] = useState(
        initialUsdAmount * currencyAmount
    );

    console.log(initialUsdAmount * currencyAmount);
    const onValueChange = (amount: string) => {
        setCurrencyAmount(Number(amount));
        setUsdAmount(initialUsdAmount * currencyAmount);
    };

    return (
        <Modal {...modalProps}>
            <InputNumber
                defaultValue={1}
                min={1}
                size="large"
                onValueChange={onValueChange}
                value={currencyAmount}
            />
            <InputNumber value={usdAmount} onValueChange={setUsdAmount} />
        </Modal>
    );
};
