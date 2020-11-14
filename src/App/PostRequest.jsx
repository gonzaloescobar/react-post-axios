import React from 'react';
import axios from 'axios';

class PostRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articleId: null
        };
    }

    componentDidMount() {
        // Simple POST request with a JSON body using axios
        const article = { title: 'React POST Request Example' };

        const headers = { 
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        };

        axios.post('https://www.mobile-banking.hsbc.com.ar/api/v1/execute/messages.listMessages')
            .then(response => this.setState({ status: "200" }));
    }

    render() {
    
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple POST Request</h5>
                <div className="card-body">
                    Returned Id: {"OK"}
                </div>
            </div>
        );
    }
}

export { PostRequest }; 