import React, { ReactNode, FunctionComponent } from 'react';
import Header from './UI/Header';
import NavigationBar from './UI/NavigationBar';
import Footer from './UI/Footer';

interface ILayoutProps {
    children: ReactNode;
}

const HomepageLayout: FunctionComponent<ILayoutProps> = (props: ILayoutProps) => (
    <div>
        <Header />
        <NavigationBar />
        {props.children}
        <Footer />
    </div>
);

export default HomepageLayout;
