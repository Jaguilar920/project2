const React = require('react');
const AppLayout = require('./AppLayout.jsx');

class Edit extends React.Component {
    render() {
        const { _id, name, img, race, tree, alignment, background, level } = this.props.character;
        return (
            <AppLayout>
            <div className="container">
                <body>
                <h1>Edit Character</h1>
                <form
                    action={`/JAguilar/edit/${_id}?_method=put`}
                    method="POST"
                >
                    <label className="mt-3">Name:</label>
                    <input type="text" className="CharName" name="name" value={name} />

                    <br />
                    
                    <label className="mt-3">Background:</label>
                    <input type="text" className="BG" name="background" value={background} />
                    
                    <br/>
                    <input type="submit" name="" value="Submit Changes" />

                </form>
                </body>
            </div>
            </AppLayout>
        );
    }
}

module.exports = Edit;
