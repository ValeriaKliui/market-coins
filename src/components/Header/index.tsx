import { useGetCoinsMarketQuery } from '@store/services/coinsApi';
import { formatNumberStr } from '@utils/formatNumberStr';
import { Descriptions, Flex, Image } from 'antd';
import DescriptionsItem from 'antd/es/descriptions/Item';
import Text from 'antd/es/typography/Text';
import './index.css';

export const Header = () => {
    const { data: coins = [] } = useGetCoinsMarketQuery({ limit: 3 });

    return (
        <header>
            <Descriptions>
                {coins.map(({ priceUsd, symbol }) => (
                    <DescriptionsItem>
                        <Flex gap="small">
                            <Text strong>{symbol}: </Text>
                            <Text type="success" strong>
                                {formatNumberStr(priceUsd, 'USD')}
                            </Text>
                        </Flex>
                    </DescriptionsItem>
                ))}
            </Descriptions>
        </header>
    );
};
