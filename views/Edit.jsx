const React = require('react');

class Edit extends React.Component {
    render() {
        const { character } = this.props;
        return (
            <div>
                <h1>Edit Character</h1>
                <form
                    action={`/characters/edit/${character._id}?_method=put`}
                    method="POST"
                >
                    Name: <input type="text" name="name" value={character.name} />
                    <br />
                    Race:{' '}
                    <input type="text" name="race" value={character.race} />
                    <br />
                    Class:{' '}
                    <input type="text" name="class" value={character.class} />
                    <br />
                    Alignment:{' '}
                    <input type="text" name="alignment" value={character.alignment} />
                    <br />
                    Background:{' '}
                    <input type="text" name="background" value={character.background} />
                    <br />
                    Track:{' '}
                    <input
                        type="checkbox"
                        checked={character.track ? 'checked' : ''}
                        name="track"
                    />
                    <br />
                    <input type="submit" name="" value="Edit Character" />
                </form>
            </div>
        );
    }
}

module.exports = Edit;
