export const formatMoneyStr = (money?: string | null, currency?: string) => {
    const moneyNum = Number(money);

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
