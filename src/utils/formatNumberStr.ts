export const formatNumberStr = (
    number?: string | null | number,
    currency?: string
) => {
    const moneyNum = Number(number);

    const formatterNum = new Intl.NumberFormat('ru', {
        maximumFractionDigits: 2,
    });
    const formattedNumber = formatterNum.format(moneyNum);

    if (formattedNumber === '0') return '';

    if (currency) {
        const formatterCurrency = new Intl.NumberFormat('ru', {
            style: 'currency',
            currency,
        });
        return formatterCurrency.format(moneyNum);
    }

    return formattedNumber;
};
