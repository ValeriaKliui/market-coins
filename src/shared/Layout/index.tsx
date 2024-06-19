import { Outlet } from 'react-router-dom';
import { Layout as PageLayout } from 'antd';

const { Header, Footer, Sider, Content } = PageLayout;

const headerStyle = {
    backgroundColor: 'transparent',
};
const contentStyle = {
    backgroundColor: 'transparent',
    padding: '5em',
};
const siderStyle = {
    backgroundColor: 'transparent',
};

export const Layout = () => (
    <>
        <PageLayout>
            <Header style={headerStyle}>Header</Header>
            <PageLayout>
                <Content style={contentStyle}>
                    <Outlet />
                </Content>
                <Sider width="15%" style={siderStyle}>
                    portfel
                </Sider>
            </PageLayout>
            <Footer>Footer</Footer>
        </PageLayout>
    </>
);
