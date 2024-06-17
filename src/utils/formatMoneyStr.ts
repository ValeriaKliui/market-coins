export const formatMoneyStr = (money: string) => {
    const moneyNum = Number(money)
    const fixedNum = Number(moneyNum.toFixed(2))

    return fixedNum.toLocaleString()
}
