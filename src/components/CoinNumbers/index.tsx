import { FC } from 'react';
import { CoinNumbersProps } from './interfaces';
import { Descriptions } from 'antd';
import DescriptionsItem from 'antd/es/descriptions/Item';

export const CoinNumbers: FC<CoinNumbersProps> = ({
    supply,
    maxSupply,
    marketCapUsd,
}) => {
    let formatter = Intl.NumberFormat('en', {
        notation: 'compact',
        maximumFractionDigits: 2,
    });

    console.log(formatter.format(supply));
    return (
        <Descriptions column={2}>
            <DescriptionsItem label="Supply">{supply}</DescriptionsItem>
            <DescriptionsItem label="Max Supply">{maxSupply}</DescriptionsItem>
            <DescriptionsItem label="Market Cap" span={2}>
                {marketCapUsd}
            </DescriptionsItem>
        </Descriptions>
    );
};
