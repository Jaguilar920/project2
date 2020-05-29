const React = require('react');
const AppLayout = require('./AppLayout.jsx')

class Show extends React.Component {
    render() {
        const { name, race, tree, alignment, background, track } = this.props.character;
        return (
            <AppLayout>
            <div className="container">
                <body>
                <h1>Characters</h1>
                <p>{name} </p>
                <p>{race}</p>
                <p>{tree}</p>
                <p>{alignment}</p>
                <p>{background}</p>
                <p>{track ? `Tracking` : `Not being tracked`}</p>
                </body>
            </div>
            </AppLayout>
        )
    }
}

module.exports = Show;