export const formatMoneyStr = (money = '') => {
    const moneyNum = Number(money);
    const fixedNum = Number(moneyNum.toFixed(2));

    return fixedNum.toLocaleString();
};
