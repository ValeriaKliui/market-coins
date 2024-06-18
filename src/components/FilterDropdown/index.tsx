import { SearchOutlined } from '@ant-design/icons'
import { Button, Input, Space } from 'antd'
import { FilterDropdownProps } from 'antd/es/table/interface'
import { FC, useRef, useState } from 'react'

export const FilterDropdown: FC<FilterDropdownProps> = ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
    close,
}) => {
    const searchInput = useRef<HTMLInputElement>(null)
    const searchKey = ''
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm()
    }
    const handleReset = (clearFilters) => {
        clearFilters()
    }

    return (
        <div
            onKeyDown={(e) => e.stopPropagation()}
            style={{
                padding: 8,
            }}
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
                        close()
                    }}
                >
                    close
                </Button>
            </Space>
        </div>
    )
}
