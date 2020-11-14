import React from 'react';

import { PostRequest } from './';

class App extends React.Component {
    render() {
        return (
            <div>
                <h3 className="p-3 text-center">React HTTP POST Requests con Axios</h3>
                <PostRequest />
            </div>
        );
    }
}

export { App }; 