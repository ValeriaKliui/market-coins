import { Radio, RadioChangeEvent } from 'antd';
import { FC, useState } from 'react';
import { RadioGroupProps } from './interfaces';
const { Group } = Radio;

export const RadioGroup = <T,>({
    options,
    onValueChange,
}: RadioGroupProps<T>) => {
    const firstOption = options && options[0];
    const initialValue =
        options && typeof firstOption === 'object'
            ? firstOption.value
            : firstOption;

    const [value3, setValue3] = useState(initialValue);

    const onChange = ({ target: { value } }: RadioChangeEvent) => {
        setValue3(value);
        onValueChange?.(value);
    };

    return (
        <Group
            options={options}
            onChange={onChange}
            value={value3}
            optionType="button"
        />
    );
};
