import { ThemeConfig } from 'antd';

export const theme: ThemeConfig = Object.freeze({
    token: {
        colorBgLayout: 'transparent',
        colorSuccess: '#1677ff',
    },
    components: {
        Layout: {
            headerBg: 'transparent',
            siderBg: 'transparent',
        },
    },
});
