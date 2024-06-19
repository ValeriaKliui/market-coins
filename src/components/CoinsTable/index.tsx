import { useLazyGetCoinsMarketQuery } from '@store/services/coinsApi';
import { Coin } from '@store/services/coinsApi/interfaces';
import { sortObjNumValues } from '@utils/sortObjNumValues';
import { PaginationProps, Table, TablePaginationConfig } from 'antd';
import Column from 'antd/es/table/Column';
import './index.css';
import { useCallback, useEffect, useState } from 'react';
import { COIN_ROWS_AMOUNT, MAXIMUM_ROWS_AMOUNT } from '@constants/coins';
import { SymbolColumn } from '@components/SymbolColumn';
import { NumberColumn } from '@components/NumberColumn';
import { SearchOutlined } from '@ant-design/icons';
import { FilterDropdown } from '@components/FilterDropdown';
import { useNavigate } from 'react-router-dom';
import { PATHS_LINKS } from '@constants/paths';
import { useSorter } from '@hooks/useSorter';

export const CoinsTable = () => {
    const [filtersInfo, setFiltersInfo] = useState({});
    const [paginationInfo, setPaginationInfo] = useState<TablePaginationConfig>(
        {
            pageSize: COIN_ROWS_AMOUNT,
            total: MAXIMUM_ROWS_AMOUNT,
            current: 1,
        }
    );

    const [getCoins, { data: coins }] = useLazyGetCoinsMarketQuery();
    const navigate = useNavigate();

    const searchString =
        filtersInfo &&
        Object.values(filtersInfo)[0] &&
        Object.values(filtersInfo)[0][0];

    const { sortedInfo, setSortedInfo, getSorterOptions } = useSorter<Coin>();

    useEffect(() => {
        getCoins({});
    }, []);

    const handleChange = (
        pagination: TablePaginationConfig,
        filters,
        sorter
    ) => {
        // setFiltersInfo(filters);
        setPaginationInfo(pagination);
        setSortedInfo(sorter);
    };

    const onPageChange = (page: number, pageSize: number) => {
        getCoins({
            offset: (page - 1) * pageSize,
            limit: pageSize,
            search: searchString,
        });
    };

    const onSearch = (searchString) => {
        // // console.log(searchString, paginationInfo);
        // const { pageSize, current } = paginationInfo;
        // // setFiltersInfo((prev) => ({ ...prev, search: searchString }));
        // getCoins({
        //     offset: (current - 1) * pageSize,
        //     limit: pageSize,
        //     search: searchString,
        // });
    };

    return (
        <Table<Coin>
            dataSource={coins}
            pagination={{
                ...paginationInfo,
                onChange: onPageChange,
            }}
            onChange={handleChange}
            onRow={(record) => ({
                onClick: () => {
                    navigate(`${PATHS_LINKS.coin}/${record.id}`);
                },
            })}
        >
            <Column<Coin> dataIndex="rank" key="rank" />
            <Column<Coin>
                title="Name"
                dataIndex="name"
                key="name"
                filterDropdown={(filterProps) => (
                    <FilterDropdown onSearch={onSearch} {...filterProps} />
                )}
                filterIcon={(filtered: boolean) => (
                    <SearchOutlined
                        style={{
                            color: filtered ? '#1677ff' : undefined,
                        }}
                    />
                )}
                onFilter={(value, record) =>
                    record['name']
                        .toString()
                        .toLowerCase()
                        .includes(value.toLowerCase())
                }
            />
            <Column<Coin>
                title="Symbol"
                dataIndex="symbol"
                key="symbol"
                render={(symbol) => <SymbolColumn symbol={symbol} />}
            />
            <Column<Coin>
                title="Price"
                dataIndex="priceUsd"
                key="priceUsd"
                render={(price) => (
                    <NumberColumn number={price} currency="USD" />
                )}
                {...getSorterOptions('priceUsd')}
            />
            <Column<Coin>
                title="24h %"
                dataIndex="changePercent24Hr"
                key="changePercent24Hr"
                render={(percents) => (
                    <NumberColumn number={percents} addon="%" />
                )}
                {...getSorterOptions('changePercent24Hr')}
            />
            <Column<Coin>
                title="Marcet cap"
                dataIndex="marketCapUsd"
                key="marketCapUsd"
                render={(marketCapUsd) => (
                    <NumberColumn number={marketCapUsd} currency="USD" />
                )}
                {...getSorterOptions('marketCapUsd')}
            />
            <Column key="action" render={() => <a>Add</a>} />
        </Table>
    );
};
