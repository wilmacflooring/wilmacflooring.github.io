import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScreensHome from './Home/Home';
import ScreensAbout from './About/About';
import ScreensContact from './Contact/Contact';
// import ScreensGallery from './Gallery/Gallery';
import ScreensProducts from './Products/Products';
import NotFound from 'src/components/UI/NotFound';

import GA from 'src/components/GoogleAnalytics';
import HomepageLayout from 'src/components/HomepageLayout';

const ScreensRoot: () => JSX.Element = () => (
    <Router>
        {/* Initialize Google Analytics and managing document title, description, and meta */}
        {GA.init() && <GA.RouteTracker />}
        <HomepageLayout>
            {/* Main Content Routing Pages */}
            <Switch>
                <Route path="/" exact component={ScreensHome} />
                <Route path="/about/" component={ScreensAbout} />
                <Route path="/contact/" component={ScreensContact} />
                <Route path="/products/" component={ScreensProducts} />
                <Route component={NotFound} />
                {/* <Route path="/products/" component={ScreensProducts} /> */}
                {/* <Route path="/gallery/" component={ScreensGallery} /> */}
            </Switch>
        </HomepageLayout>
    </Router>
);

export default ScreensRoot;
