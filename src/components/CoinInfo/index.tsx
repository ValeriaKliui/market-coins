import { CoinCard } from '@components/CoinCard';
import { CoinNumbers } from '@components/CoinNumbers';
import { useGetCoinInfoQuery } from '@store/services/coinsApi';
import { FC, memo } from 'react';
import { CoinInfoProps } from './interfaces';
import { Button, Flex, Result } from 'antd';
import './index.css';
import { CoinHistory } from '@components/CoinHistory';

export const CoinInfo: FC<CoinInfoProps> = memo(({ id }) => {
    const { data: coinInfo, error } = useGetCoinInfoQuery({ id });

    const { symbol, name, rank, priceUsd, supply, marketCapUsd, maxSupply } =
        coinInfo ?? {};

    if (error && 'data' in error && error.status === 404)
        return (
            <Result
                status={error.status}
                title={`Wrong coin: ${id}`}
                subTitle={`Sorry, the page for ${id} does not exist.`}
                extra={<Button type="primary">Back Home</Button>}
            />
        );

    return (
        <>
            <Flex gap="large">
                <CoinCard
                    symbol={symbol}
                    name={name}
                    rank={rank}
                    priceUsd={priceUsd}
                    bottom={
                        <CoinNumbers
                            supply={supply}
                            marketCapUsd={marketCapUsd}
                            maxSupply={maxSupply}
                            symbol={symbol}
                        />
                    }
                />
            </Flex>
            <CoinHistory id={id} />
        </>
    );
});
