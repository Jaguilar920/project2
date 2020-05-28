const React = require('react');

class Show extends React.Component {
    render() {
        const { name, race, tree, alignment, background, tracking } = this.props.character;
        return (
            <div className="container">
                <body>
                <h1>Characters</h1>
                <p>{name} </p>
                <p>{race}</p>
                <p>{tree}</p>
                <p>{alignment}</p>
                <p>{background}</p>
                <p>{tracking ? `Tracking` : `Not being tracked`}</p>
                </body>
            </div>
        )
    }
}

module.exports = Show;