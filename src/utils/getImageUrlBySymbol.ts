import { IMAGE_URL } from '@constants/coins';

export const getImageUrlBySymbol = (symbol = '') => {
    const symbolFormatted = symbol.toLowerCase();

    return `${IMAGE_URL}${symbolFormatted}@2x.png`;
};
