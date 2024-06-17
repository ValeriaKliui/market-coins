import { useGetCoinsMarketQuery } from '@store/services/coinsApi'
import { Flex, Input, Space, Table, Image, TableColumnsType } from 'antd'
import { useRef, useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Coin } from '@store/services/coinsApi/interfaces'
import type { ColumnsType } from 'antd/es/table'
import { formatMoneyStr } from '@utils/formatMoneyStr'

export const CoinsTable = () => {
    const { data: coins } = useGetCoinsMarketQuery()

    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const searchInput = useRef(null)

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm()
        setSearchText(selectedKeys[0])
        setSearchedColumn(dataIndex)
    }
    const handleReset = (clearFilters) => {
        clearFilters()
        setSearchText('')
    }

    // const getColumnSearchProps = (dataIndex) => ({
    //     filterDropdown: ({
    //         setSelectedKeys,
    //         selectedKeys,
    //         confirm,
    //         clearFilters,
    //         close,
    //     }) => (
    //         <div
    //             style={{
    //                 padding: 8,
    //             }}
    //             onKeyDown={(e) => e.stopPropagation()}
    //         >
    //             <Input
    //                 ref={searchInput}
    //                 placeholder={`Search ${dataIndex}`}
    //                 value={selectedKeys[0]}
    //                 onChange={(e) =>
    //                     setSelectedKeys(e.target.value ? [e.target.value] : [])
    //                 }
    //                 onPressEnter={() =>
    //                     handleSearch(selectedKeys, confirm, dataIndex)
    //                 }
    //                 style={{
    //                     marginBottom: 8,
    //                     display: 'block',
    //                 }}
    //             />
    //             <Space>
    //                 <Button
    //                     type="primary"
    //                     onClick={() =>
    //                         handleSearch(selectedKeys, confirm, dataIndex)
    //                     }
    //                     icon={<SearchOutlined />}
    //                     size="small"
    //                     style={{
    //                         width: 90,
    //                     }}
    //                 >
    //                     Search
    //                 </Button>
    //                 <Button
    //                     onClick={() =>
    //                         clearFilters && handleReset(clearFilters)
    //                     }
    //                     size="small"
    //                     style={{
    //                         width: 90,
    //                     }}
    //                 >
    //                     Reset
    //                 </Button>
    //                 <Button
    //                     type="link"
    //                     size="small"
    //                     onClick={() => {
    //                         confirm({
    //                             closeDropdown: false,
    //                         })
    //                         setSearchText(selectedKeys[0])
    //                         setSearchedColumn(dataIndex)
    //                     }}
    //                 >
    //                     Filter
    //                 </Button>
    //                 <Button
    //                     type="link"
    //                     size="small"
    //                     onClick={() => {
    //                         close()
    //                     }}
    //                 >
    //                     close
    //                 </Button>
    //             </Space>
    //         </div>
    //     ),
    //     // filterIcon: (filtered) => (
    //     //     <SearchOutlined
    //     //         style={{
    //     //             color: filtered ? '#1677ff' : undefined,
    //     //         }}
    //     //     />
    //     // ),
    //     // onFilter: (value, record) =>
    //     //     record[dataIndex]
    //     //         .toString()
    //     //         .toLowerCase()
    //     //         .includes(value.toLowerCase()),
    //     // onFilterDropdownOpenChange: (visible) => {
    //     //     if (visible) {
    //     //         setTimeout(() => searchInput.current?.select(), 100)
    //     //     }
    //     // },
    //     // render: (text) =>
    //     //     searchedColumn === dataIndex ? <p>{searchText}</p> : text,
    // })

    const columns: ColumnsType<Coin> = [
        {
            title: 'Symbol',
            dataIndex: 'symbol',
            key: 'symbol',
            render: (name) => (
                <Flex align="center" gap="small">
                    <Image
                        src={`https://assets.coincap.io/assets/icons/${name.toLowerCase()}@2x.png`}
                        width={40}
                    />
                    <>{name}</>
                </Flex>
            ),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            // ...getColumnSearchProps('name'),
        },
        {
            title: 'Price',
            dataIndex: 'priceUsd',
            key: 'priceUsd',
            sorter: (a, b) => a.priceUsd - b.priceUsd,
            sortDirections: ['descend', 'ascend'],
            render: (price: string) => <p>${formatMoneyStr(price)}</p>,
        },
        {
            title: 'marketCapUsd',
            dataIndex: 'marketCapUsd',
            key: 'marketCapUsd',
            sorter: (a, b) => a.marketCapUsd - b.marketCapUsd,
            sortDirections: ['descend', 'ascend'],
            render: (marketCapUsd: string) => (
                <p>${formatMoneyStr(marketCapUsd)}</p>
            ),
        },
        {
            title: '24h %',
            dataIndex: 'changePercent24Hr',
            key: 'changePercent24Hr',
            sorter: (a, b) => a.changePercent24Hr - b.changePercent24Hr,
            sortDirections: ['descend', 'ascend'],
            render: (percent: string) => <p>{formatMoneyStr(percent)}%</p>,
        },
        {
            key: 'action',
            render: () => <a>Add</a>,
        },
    ]

    return (
        <Table
            dataSource={coins}
            columns={columns}
            pagination={{
                current: 1,
                pageSize: 30,
            }}
        />
    )
}
