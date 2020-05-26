const React = require('react');

class Show extends React.Component {
    render() {
        const { name, tracking } = this.props.character;
        return (
            <div>
                <h1>Characters</h1>
                <p>{name} </p>
                <p>{tracking ? `Tracking` : `Not being tracked`}</p>
            </div>
        )
    }
}

module.exports = Show;