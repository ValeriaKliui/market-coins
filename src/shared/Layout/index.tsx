import { Outlet } from 'react-router-dom';
import { Layout as PageLayout } from 'antd';

const { Header, Footer, Sider, Content } = PageLayout;

export const Layout = () => (
    <>
        <PageLayout>
            <Header>Header</Header>
            <PageLayout>
                <Content>
                    <Outlet />
                </Content>
                <Sider width="15%">portfel</Sider>
            </PageLayout>
            <Footer>Footer</Footer>
        </PageLayout>
    </>
);
