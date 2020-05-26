const React = require('react');
const AppLayout = require('./AppLayout.jsx');

class Index extends React.Component {
    render() {
        const logout = (
            <form action="/sessions/?_method=delete" method="post">
                <input type="submit" value="Logout" />
            </form>
        );

        const { characters } = this.props;
        return (
            <AppLayout title="INDEX PAGE">
                <div>
                    <h1>Character List</h1>
                    <h2>{this.props.username}</h2>
                    <nav>
                        <a href="/dnd/new">Create Character</a>
                    </nav>
                    {this.props.username ? logout : ''}
                    <ul>
                        {characters.map((character, i) => {
                            return (
                                <li>
                                    {' '}
                                    <a href={`/dnd/${character._id}`}>
                                        {character.name}
                                    </a>{' '}
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
            </AppLayout>
        );
    }
}

module.exports = Index;
