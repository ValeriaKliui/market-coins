export const formatNumber = (number?: number | string | null) => {
    const formattedNumber = Number(number);
    return Math.round(formattedNumber * 100) / 100;
};
