import * as Styled from './Layout.styles';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Styled.Layout>
            <Styled.Header><h1>Device Management App</h1></Styled.Header>
            <Styled.Content>{children}</Styled.Content>
            <Styled.Footer></Styled.Footer>
        </Styled.Layout>
    );
}

export default Layout;