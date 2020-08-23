import React, { ReactNode, FunctionComponent } from 'react';
import NavigationBar from './UI/NavigationBar';
import Footer from './UI/Footer';

interface ILayoutProps {
    children: ReactNode;
}

const HomepageLayout: FunctionComponent<ILayoutProps> = (props: ILayoutProps) => (
    <div>
        <NavigationBar />
        {props.children}
        <Footer />
    </div>
);

export default HomepageLayout;
