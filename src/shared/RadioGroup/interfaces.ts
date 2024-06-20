import { RadioGroupProps as RadioGroupPropsA } from 'antd';

export interface RadioGroupProps<T> extends RadioGroupPropsA {
    onValueChange: (value: T) => void;
}
