import { Outlet } from 'react-router-dom';
import { Layout as PageLayout } from 'antd';
import './index.css';
const { Header, Footer, Sider, Content } = PageLayout;

export const Layout = () => (
    <>
        <PageLayout>
            <Header>Header</Header>
            <PageLayout>
                <Content className="MEEEEEEEEE">
                    <Outlet />
                </Content>
                <Sider width="15%">portfel</Sider>
            </PageLayout>
            <Footer>Footer</Footer>
        </PageLayout>
    </>
);
