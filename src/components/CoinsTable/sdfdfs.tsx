import { SearchOutlined } from '@ant-design/icons'
import { FilterDropdown } from '@components/FilterDropdown'
import { Coin } from '@store/services/coinsApi/interfaces'
import Column from 'antd/es/table/Column'

export const Fsdfd = () => {
    return (
        <>
            YAAA
            <Column<Coin>
                title="Name"
                dataIndex="name"
                key="name"
                filterDropdown={<FilterDropdown />}
                filterIcon={(filtered: boolean) => (
                    <SearchOutlined
                        style={{
                            color: filtered ? '#1677ff' : undefined,
                        }}
                    />
                )}
                // {...searchByName}
            />
        </>
    )
}
