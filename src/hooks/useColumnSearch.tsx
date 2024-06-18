import { SearchOutlined } from '@ant-design/icons'
import { Button, Input, Space } from 'antd'
import { Key } from 'antd/es/table/interface'
import { useMemo, useRef, useState } from 'react'

export const useColumnSearch = <T,>(searchKey: keyof T) => {
    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const searchInput = useRef<HTMLInputElement>(null)
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm()
        setSearchText(selectedKeys[0])
        setSearchedColumn(dataIndex)
    }
    const handleReset = (clearFilters) => {
        clearFilters()
        setSearchText('')
    }
    const filterDropdown = ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
        close,
    }) => (
        <div
            style={{
                padding: 8,
            }}
            onKeyDown={(e) => e.stopPropagation()}
        >
            <Input
                ref={searchInput}
                placeholder={`Search ${searchKey}`}
                value={selectedKeys[0]}
                onChange={(e) =>
                    setSelectedKeys(e.target.value ? [e.target.value] : [])
                }
                onPressEnter={() =>
                    handleSearch(selectedKeys, confirm, searchKey)
                }
                style={{
                    marginBottom: 8,
                    display: 'block',
                }}
            />
            <Space>
                <Button
                    type="primary"
                    onClick={() =>
                        handleSearch(selectedKeys, confirm, searchKey)
                    }
                    icon={<SearchOutlined />}
                    size="small"
                    style={{
                        width: 90,
                    }}
                >
                    Search
                </Button>
                <Button
                    onClick={() => clearFilters && handleReset(clearFilters)}
                    size="small"
                    style={{
                        width: 90,
                    }}
                >
                    Reset
                </Button>
                <Button
                    type="link"
                    size="small"
                    onClick={() => {
                        confirm({
                            closeDropdown: false,
                        })
                        setSearchText(selectedKeys[0])
                        setSearchedColumn(searchKey)
                    }}
                >
                    Filter
                </Button>
                <Button
                    type="link"
                    size="small"
                    onClick={() => {
                        close()
                    }}
                >
                    close
                </Button>
            </Space>
        </div>
    )

    const render = (text: string) =>
        searchedColumn === searchKey ? (
            <p style={{ fontWeight: 'bold' }}>{text}</p>
        ) : (
            text
        )

    const onFilterDropdownOpenChange = (visible: boolean) => {
        if (visible) {
            setTimeout(() => searchInput.current?.select(), 100)
        }
    }
    const onFilter = (value: Boolean | Key, record: T) =>
        record[searchKey].toString().toLowerCase().includes(value.toLowerCase())

    const filterIcon = (filtered: boolean) => (
        <SearchOutlined
            style={{
                color: filtered ? '#1677ff' : undefined,
            }}
        />
    )

    return useMemo(
        () => ({
            render,
            onFilterDropdownOpenChange,
            onFilter,
            filterIcon,
            filterDropdown,
        }),
        []
    )
}
