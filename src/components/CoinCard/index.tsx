import { formatNumberStr } from '@utils/formatNumberStr';
import { getImageUrlBySymbol } from '@utils/getImageUrlBySymbol';
import { Avatar, Card, Flex } from 'antd';
import Meta from 'antd/es/card/Meta';
import { FC } from 'react';
import { CoinCardProps } from './interfaces';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import './index.css';

export const CoinCard: FC<CoinCardProps> = ({
    symbol,
    name,
    rank,
    priceUsd,
    bottom,
}) => {
    const formattedPriceUsd = formatNumberStr(priceUsd, 'USD');
    return (
        <Card
            bordered={false}
            title={
                <>
                    <Flex gap="small" align="flex-start">
                        <Avatar
                            src={getImageUrlBySymbol(symbol)}
                            size="default"
                        />
                        <Title level={3}> {name}</Title>
                        <Text type="secondary"> {symbol}</Text>
                    </Flex>
                </>
            }
        >
            <Text italic>Rank: {rank}</Text>
            <Meta
                title={
                    <>
                        <Title level={2}>{formattedPriceUsd}</Title>
                        {bottom}
                    </>
                }
            />
        </Card>
    );
};
