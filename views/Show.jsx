const React = require('react');
const AppLayout = require('./AppLayout.jsx')

class Show extends React.Component {
    render() {
        const { name, background,} = this.props.character;
        return (
            <AppLayout>
            <div className="container">
                <body>
                <h1></h1>
                <h1>{name} </h1>
                <p>{background}</p>
                </body>
            </div>
            </AppLayout>
        )
    }
}

module.exports = Show;