import { Outlet } from 'react-router-dom';
import { Layout as PageLayout } from 'antd';
import './index.css';
import { Header } from '@components/Header';
const { Header: PageHeader, Footer, Sider, Content } = PageLayout;

export const Layout = () => (
    <>
        <PageLayout>
            <PageHeader>
                <Header />
            </PageHeader>
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
