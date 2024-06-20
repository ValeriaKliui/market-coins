import { InputNumber as InputNumberA } from 'antd';
import { FC } from 'react';
import { InputNumberProps } from './interfaces';

export const InputNumber: FC<InputNumberProps> = ({
    onValueChange,
    ...props
}) => {
    const onChange = (value: string) => {
        onValueChange(value);
    };

    return <InputNumberA onChange={onChange} {...props} />;
};
