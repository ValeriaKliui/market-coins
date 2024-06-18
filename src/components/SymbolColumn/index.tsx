import { Space, Image } from 'antd'
import { FC } from 'react'
import { SymbolColumnProps } from './interfaces'

export const SymbolColumn: FC<SymbolColumnProps> = ({ symbol }) => (
    <Space align="center" size="middle">
        <Image
            src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
            width={40}
        />
        <>{symbol}</>
    </Space>
)
