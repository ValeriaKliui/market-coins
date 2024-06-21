import { formatNumberStr } from '@utils/formatNumberStr';

export const NumberColumn = ({ number, currency, addon }) => {
    const roundedNumberStr = formatNumberStr(number, currency);

    if (roundedNumberStr === '0') return <></>;

    return (
        <>
            <p>
                {roundedNumberStr} {roundedNumberStr && addon}
            </p>
        </>
    );
};
