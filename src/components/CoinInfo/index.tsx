import { CoinCard } from '@components/CoinCard';
import { CoinNumbers } from '@components/CoinNumbers';
import { useGetCoinInfoQuery } from '@store/services/coinsApi';
import { FC } from 'react';
import { CoinInfoProps } from './interfaces';

export const CoinInfo: FC<CoinInfoProps> = ({ coin }) => {
    const { data: coinInfo } = useGetCoinInfoQuery({ coin });

    const { symbol, name, rank, priceUsd, supply, marketCapUsd, maxSupply } =
        coinInfo ?? {};

    return (
        <>
            <CoinCard
                symbol={symbol}
                name={name}
                rank={rank}
                priceUsd={priceUsd}
            />
            <CoinNumbers
                supply={supply}
                marketCapUsd={marketCapUsd}
                maxSupply={maxSupply}
            />
        </>
    );
};
