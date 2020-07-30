const React = require('react');

class AppLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Jacob Aguilar</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"></link>
                    <script src="./public/Javascript/app.js"></script>
                    <link rel="stylesheet" href="/css/styles.css"/>
                </head>
                
                <body>
                    <header>
                        <h1>Jacob Aguilar</h1>
                        <div className="navi">
                        <ul className="nav nav-tabs nav-fill">
                            <li className="nav-item">
                            <a className="nav-link" href="https://github.com/Jaguilar920">Github</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.linkedin.com/in/jacob-aguilar-5886b31a0/">LinkedIn</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Resume</a>
                            </li>
                            
                        </ul>
                        </div>
                        
                    </header>
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