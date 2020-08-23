import React, { ReactNode, FunctionComponent } from 'react';
import NavigationBar from './UI/NavigationBar';

interface ILayoutProps {
    children: ReactNode;
}

const HomepageLayout: FunctionComponent<ILayoutProps> = (props: ILayoutProps) => (
    <div>
        <NavigationBar />
        {props.children}
    </div>
);

export default HomepageLayout;
