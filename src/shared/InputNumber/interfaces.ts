import { InputNumberProps as InputNumberPropsA } from 'antd';

export interface InputNumberProps extends InputNumberPropsA {
    onValueChange: (value: string) => void;
}
