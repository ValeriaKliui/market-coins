import { CoinInfo } from '@components/CoinInfo';
import { useParams } from 'react-router-dom';

export const CoinPage = () => {
    const coin = useParams().id || '';

    return (
        <>
            <CoinInfo coin={coin} />
        </>
    );
};
