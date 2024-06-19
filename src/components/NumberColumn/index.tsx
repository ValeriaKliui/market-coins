import { formatMoneyStr } from '@utils/formatMoneyStr';

export const NumberColumn = ({ number, currency, addon }) => {
    const roundedNumberStr = formatMoneyStr(number, currency);

    if (roundedNumberStr === '0') return <></>;

    return (
        <>
            <p>
                {roundedNumberStr} {roundedNumberStr && addon}
            </p>
        </>
    );
};
