import { CoinInfo } from '@components/CoinInfo';
import { PATHS_LINKS } from '@constants/paths';
import { Button } from '@shared/Button';
import { Flex } from 'antd';
import { useParams } from 'react-router-dom';

const CoinPage = () => {
    const coinId = useParams().id || '';

    return (
        <>
            <Flex vertical align="start" gap="large">
                <Button href={PATHS_LINKS.main} type="link">
                    Return
                </Button>
                <CoinInfo id={coinId} />
            </Flex>
        </>
    );
};

export default CoinPage;
