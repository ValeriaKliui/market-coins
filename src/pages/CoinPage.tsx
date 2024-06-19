import { CoinInfo } from '@components/CoinInfo';
import { useParams } from 'react-router-dom';

const CoinPage = () => {
    const coin = useParams().id || '';

    return (
        <>
            <CoinInfo coin={coin} />
        </>
    );
};

export default CoinPage;
