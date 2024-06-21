import { FC } from 'react';
import { CoinNumbersProps } from './interfaces';
import { Descriptions } from 'antd';
import DescriptionsItem from 'antd/es/descriptions/Item';
import { formatNumberStr } from '@utils/formatNumberStr';

export const CoinNumbers: FC<CoinNumbersProps> = ({
    supply,
    maxSupply,
    marketCapUsd,
    symbol,
}) => {
    const supplyCurr = formatNumberStr(supply);
    const maxSupplyCurr = formatNumberStr(maxSupply);
    const marketCapUsdCurr = formatNumberStr(marketCapUsd, 'USD');

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
