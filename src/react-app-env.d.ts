/// <reference types="react-scripts" />
declare module 'react-snapshot' {
    import * as ReactDOM from 'react-dom';
    let render: ReactDOM.Renderer;
}

declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        PUBLIC_URL: string;
        REACT_APP_GOOGLE_ANALYTICS: string;
    }
}
