const React = require('react');

class AppLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>DND</title>
                </head>
                <div class="container">
                <body>
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                </body>
                </div>
            </html>
        );
    }
}

module.exports = AppLayout;