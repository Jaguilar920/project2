const React = require('react');

class Edit extends React.Component {
    render() {
        const { _id, name, race, tree, alignment, background, track } = this.props.character;
        return (
            <div>
                <h1>Edit Character</h1>
                <form
                    action={`/characters/edit/${character._id}?_method=put`}
                    method="POST"
                >
                    Name: <input type="text" name="name" value={name} />
                    <br />
                    Race:{' '}
                    <input type="text" name="race" value={race} />
                    <br />
                    Class:{' '}
                    <input type="text" name="tree" value={tree} />
                    <br />
                    Alignment:{' '}
                    <input type="text" name="alignment" value={alignment} />
                    <br />
                    Background:{' '}
                    <input type="text" name="background" value={background} />
                    <br />
                    Track:{' '}
                    <input
                        type="checkbox"
                        checked={track ? 'checked' : ''}
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
