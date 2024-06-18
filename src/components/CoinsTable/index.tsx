import { useColumnSearch } from '@hooks/useColumnSearch'
import { useLazyGetCoinsMarketQuery } from '@store/services/coinsApi'
import { Coin } from '@store/services/coinsApi/interfaces'
import { formatMoneyStr } from '@utils/formatMoneyStr'
import { sortObjNumValues } from '@utils/sortObjNumValues'
import { Space, Table, Image, TablePaginationConfig } from 'antd'
import Column from 'antd/es/table/Column'
import './index.css'
import { useEffect, useState } from 'react'
import { COIN_ROWS_AMOUNT, MAXIMUM_ROWS_AMOUNT } from '@constants/films'
import { SymbolColumn } from '@components/SymbolColumn'
import { NumberColumn } from '@components/NumberColumn'
import { SearchOutlined } from '@ant-design/icons'
import { FilterDropdown } from '@components/FilterDropdown'

export const CoinsTable = () => {
    const [paginationParams, setPaginationParams] =
        useState<TablePaginationConfig>({
            defaultPageSize: COIN_ROWS_AMOUNT,
            total: MAXIMUM_ROWS_AMOUNT,
        })
    const [sortedInfo, setSortedInfo] = useState({})
    const [getCoins, { data: coins }] = useLazyGetCoinsMarketQuery()
    const searchByName = useColumnSearch<Coin>('name')

    useEffect(() => {
        getCoins({})
    }, [])

    useEffect(() => {
        if (coins && coins.length < COIN_ROWS_AMOUNT)
            setPaginationParams((prev) => ({
                ...prev,
                total: prev?.current * prev?.pageSize,
            }))
        else
            setPaginationParams((prev) => ({
                ...prev,
                total: MAXIMUM_ROWS_AMOUNT,
            }))
    }, [coins])

    const handleChange = (
        pagination: TablePaginationConfig,
        filters,
        sorter
    ) => {
        const { current = 1, pageSize = 1 } = pagination
        const searchString =
            filters && Object.values(filters)[0] && Object.values(filters)[0][0]

        getCoins({
            offset: (current - 1) * pageSize,
            limit: pageSize,
            search: searchString,
        })

        setPaginationParams(pagination)
        setSortedInfo(sorter)
    }

    return (
        <Table<Coin>
            dataSource={coins}
            pagination={paginationParams}
            onChange={handleChange}
        >
            <Column<Coin> dataIndex="rank" key="rank" />
            <Column<Coin>
                title="Name"
                dataIndex="name"
                key="name"
                filterDropdown={(filterProps) => (
                    <FilterDropdown {...filterProps} />
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
                sorter={sortObjNumValues<Coin>('priceUsd')}
                render={(price) => <NumberColumn number={price} addon="$" />}
                sortOrder={
                    sortedInfo.columnKey === 'priceUsd'
                        ? sortedInfo.order
                        : null
                }
            />
            <Column<Coin>
                title="24h %"
                dataIndex="changePercent24Hr"
                key="changePercent24Hr"
                render={(percents) => (
                    <NumberColumn number={percents} addon="%" />
                )}
                sorter={sortObjNumValues<Coin>('changePercent24Hr')}
                sortOrder={
                    sortedInfo.columnKey === 'changePercent24Hr'
                        ? sortedInfo.order
                        : null
                }
            />
            <Column<Coin>
                title="Marcet cap"
                dataIndex="marketCapUsd"
                key="marketCapUsd"
                render={(marketCapUsd) => (
                    <NumberColumn number={marketCapUsd} addon="$" />
                )}
                sorter={sortObjNumValues<Coin>('marketCapUsd')}
                sortOrder={
                    sortedInfo.columnKey === 'marketCapUsd'
                        ? sortedInfo.order
                        : null
                }
            />
            <Column key="action" render={() => <a>Add</a>} />
        </Table>
    )
}
