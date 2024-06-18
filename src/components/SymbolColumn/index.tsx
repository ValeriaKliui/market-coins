import { getImageUrlBySymbol } from '@utils/getImageUrlBySymbol';
import { Space, Image } from 'antd';
import { FC } from 'react';
import { SymbolColumnProps } from './interfaces';

export const SymbolColumn: FC<SymbolColumnProps> = ({ symbol }) => (
    <Space align="center" size="middle">
        <Image src={getImageUrlBySymbol(symbol)} width={40} />
        <>{symbol}</>
    </Space>
);
