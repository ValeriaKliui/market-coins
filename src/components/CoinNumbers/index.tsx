import { FC } from 'react';
import { CoinNumbersProps } from './interfaces';
import { Descriptions } from 'antd';
import DescriptionsItem from 'antd/es/descriptions/Item';
import { formatMoneyStr } from '@utils/formatMoneyStr';

export const CoinNumbers: FC<CoinNumbersProps> = ({
    supply,
    maxSupply,
    marketCapUsd,
    symbol,
}) => {
    const supplyCurr = formatMoneyStr(supply);
    const maxSupplyCurr = formatMoneyStr(maxSupply);
    const marketCapUsdCurr = formatMoneyStr(marketCapUsd, 'USD');

    return (
        <>
            <Descriptions column={1}>
                {supply && (
                    <DescriptionsItem label="Supply">
                        {supplyCurr} {symbol}
                    </DescriptionsItem>
                )}
                {maxSupply && (
                    <DescriptionsItem label="Max Supply">
                        {maxSupplyCurr} {symbol}
                    </DescriptionsItem>
                )}
                {marketCapUsd && (
                    <DescriptionsItem label="Market Cap">
                        {marketCapUsdCurr}
                    </DescriptionsItem>
                )}
            </Descriptions>
        </>
    );
};
