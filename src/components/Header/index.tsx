import { useGetCoinsMarketQuery } from '@store/services/coinsApi';
import { formatMoneyStr } from '@utils/formatMoneyStr';
import { Descriptions, Image } from 'antd';
import DescriptionsItem from 'antd/es/descriptions/Item';
import Text from 'antd/es/typography/Text';

export const Header = () => {
    const { data: coins = [] } = useGetCoinsMarketQuery({ limit: 3 });
    console.log(coins);

    return (
        <header>
            <Descriptions>
                {coins.map(({ priceUsd, symbol }) => (
                    <DescriptionsItem>
                        <Text strong>{symbol}</Text> :{' '}
                        {formatMoneyStr(priceUsd, 'USD')}
                    </DescriptionsItem>
                ))}
            </Descriptions>{' '}
        </header>
    );
};
