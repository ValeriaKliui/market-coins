import { sortObjNumValues } from '@utils/sortObjNumValues';
import { SorterResult } from 'antd/es/table/interface';
import { useState } from 'react';

export const useSorter = <T>() => {
    const [sortedInfo, setSortedInfo] = useState<SorterResult<T>>({});

    const getSorterOptions = (columnKey: keyof T) => ({
        sorter: sortObjNumValues<T>(columnKey),
        sortOrder: sortedInfo.columnKey === columnKey ? sortedInfo.order : null,
    });

    return { getSorterOptions, sortedInfo, setSortedInfo };
};
