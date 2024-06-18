import { formatMoneyStr } from '@utils/formatMoneyStr';
import { getImageUrlBySymbol } from '@utils/getImageUrlBySymbol';
import { Avatar, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { FC } from 'react';
import { CoinCardProps } from './interfaces';

export const CoinCard: FC<CoinCardProps> = ({
    symbol,
    name,
    rank,
    priceUsd,
}) => {
    return (
        <Card
            title={
                <>
                    <Avatar src={getImageUrlBySymbol(symbol)} size="default" />
                    {name}
                    {symbol}
                    (rank: {rank})
                </>
            }
            bordered={false}
        >
            <Meta title={`Price: $${formatMoneyStr(priceUsd)}`} />
        </Card>
    );
};
