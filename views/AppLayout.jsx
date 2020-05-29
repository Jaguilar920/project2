const React = require('react');

class AppLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>DND</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"></link>
                    <script src="./public/Javascript/app.js"></script>
                    <link rel="stylesheet" href="/css/styles.css"/>
                </head>
                
                <body>
                <div class="container">
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                </div>
                </body>
            </html>
        );
    }
}

module.exports = AppLayout;