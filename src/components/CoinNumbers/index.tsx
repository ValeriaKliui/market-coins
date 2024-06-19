import { FC } from 'react';
import { CoinNumbersProps } from './interfaces';
import { Button, Descriptions } from 'antd';
import DescriptionsItem from 'antd/es/descriptions/Item';
import { formatMoneyStr } from '@utils/formatMoneyStr';
import { useNavigate } from 'react-router-dom';

export const CoinNumbers: FC<CoinNumbersProps> = ({
    supply,
    maxSupply,
    marketCapUsd,
    symbol,
}) => {
    const navigate = useNavigate();
    const supplyCurr = formatMoneyStr(supply);
    const maxSupplyCurr = formatMoneyStr(maxSupply);
    const marketCapUsdCurr = formatMoneyStr(marketCapUsd, 'USD');
    const returnToPrevPage = () => navigate(-1);

    return (
        <>
            <Button onClick={returnToPrevPage}>Go back</Button>
            <Descriptions column={2}>
                {supply && (
                    <DescriptionsItem label="Supply">
                        {supplyCurr} {symbol}
                    </DescriptionsItem>
                )}{' '}
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
