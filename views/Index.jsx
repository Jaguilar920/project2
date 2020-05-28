const React = require('react');
const AppLayout = require('./AppLayout.jsx');

class Index extends React.Component {
    render() {

        const { characters } = this.props;
        return (
            
                <div>
                    <h1>Character List</h1>
                    <h2>{this.props.name}</h2>
                    <nav>
                        <a href="/dnd/new">Create Character</a>
                    </nav>
                    <ul>
                        {characters.map((character, i) => {
                            return (
                                <li>
                                    
                                    <a href={`/dnd/${character._id}`}>
                                        {character.name}
                                    </a>
                                    {character.class} <br></br>
                                    {character.track
                                        ? `Tracking`
                                        : `Not being tracked`}
                                    <br />
                                    <a href={`/dnd/edit/${character._id}`}>
                                        Edit {character.name}
                                    </a>
                                    <form
                                        action={`/dnd/${character._id}?_method=DELETE`}
                                        method="post"
                                    >
                                        <input type="submit" value="delete" />
                                    </form>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            
        );
    }
}

module.exports = Index;
