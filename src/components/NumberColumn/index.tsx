import { formatMoneyStr } from '@utils/formatMoneyStr'

export const NumberColumn = ({ number, addon }) => {
    const roundedNumberStr = formatMoneyStr(number)

    if (roundedNumberStr === '0') return <></>

    return (
        <>
            <p>
                {roundedNumberStr}
                {addon}
            </p>
        </>
    )
}
