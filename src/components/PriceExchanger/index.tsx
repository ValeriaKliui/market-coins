import { formatNumber } from '@utils/formatNumber';
import { useState } from 'react';
import { InputNumber } from '@shared/InputNumber';
import { Flex } from 'antd';
import './index.css';
import Text from 'antd/es/typography/Text';

export const PriceExchanger = ({ price }) => {
    const usdPrice = formatNumber(price);
    const [currencyAmount, setCurrencyAmount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(usdPrice * currencyAmount);

    const onAmountChange = (amount: string) => {
        const currAmount = Number(amount);
        setCurrencyAmount(currAmount);
        setTotalPrice(usdPrice * currAmount);
    };

    const onPriceChange = (price: string) => {
        const priceNum = Number(price);
        setCurrencyAmount(priceNum / usdPrice);
        setTotalPrice(priceNum);
    };

    const formatter = (value?: string | number) => String(formatNumber(value));

    const exchangeItems = [
        {
            title: 'Coin amount',
            defaultValue: 1,
            onValueChange: onAmountChange,
            value: currencyAmount,
        },
        {
            title: 'Total cost, USD',
            defaultValue: usdPrice * currencyAmount,
            onValueChange: onPriceChange,
            value: totalPrice,
            addonBefore: '$',
        },
    ];

    return (
        <>
            <Flex vertical gap="middle">
                {exchangeItems.map(
                    ({
                        title,
                        defaultValue,
                        onValueChange,
                        value,
                        addonBefore,
                    }) => (
                        <Flex vertical>
                            <Text type="secondary">{title}</Text>
                            <InputNumber
                                defaultValue={defaultValue}
                                min={0}
                                size="large"
                                onValueChange={onValueChange}
                                value={value}
                                formatter={formatter}
                                addonBefore={addonBefore}
                            />
                        </Flex>
                    )
                )}
            </Flex>
        </>
    );
};
