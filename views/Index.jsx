const React = require('react');
const AppLayout = require('./AppLayout.jsx');


class Index extends React.Component {
    render() {

        const { characters } = this.props;
        return (
            <AppLayout>
                <div className="container">
                    <body>
                        <fieldset className="character-info">
                            <legend><h2>About Me</h2></legend>
                        </fieldset>
                        <br/>
                    <fieldset className="character-info">
                    <legend><h2>Recent Projects</h2></legend>

<div className="card"> 
  <div className="card-body shadow">
    <h4 className="card-title">First Website</h4>
    <p className="card-text">
      This was my very first website project! In this project I focused on practicing the moving of data across different elements in unison.
    </p>
    <a href="https://jaguilar920.github.io/" className="btn btn-primary">View Project</a>
  </div>
</div>

<br/>

<div className="card">
    <div className="card-body shadow">
        <h4 className="card-title">DND Express</h4>
        <p className="card-text">In this project I create my first express app project. I display my ability to create a full crud app to create, edit, delete, and view character forms.</p>
        <a href="#" className="btn btn-primary">View Project</a>
    </div>
</div>

<br/>

<div className="card shadow">
    <div className="card-body">
        <h4 className="card-title">DND Full Project</h4>
        <p className="card-text">This is the current progress of a full project I am working on. It will be a fully functioning DND Helper complete with character creation, combat simulations and skill creation.</p>
        <a href="#" className="btn btn-primary">View Project</a>
    </div>
</div>

                    {/* <label>{this.props.name}</label>                   
                        <ul>
                            {characters.map((character, i) => {
                                return (

<li className="shadow">

           
            <div className="card">
                <div className="card-body">
            <h3 className="CharName card-title">{character.name}</h3>
            <p className="CharBackground card-text">{character.background}</p>
            
            </div>
            </div>
           
        
           
                 
                                    <br/>
                 <div className="row">
                     <div className="col">
                    <form className="edit"
                    action={`/JAguilar/edit/${character._id}`}>
                    <input type="submit" value="Show" />
                    </form>
                    </div> */}

                    {/* <div className="col">
                    <form className="delete"
                    action={`/JAguilar/${character._id}?_method=DELETE`}
                    method="post">
                    <input type="submit" value="Delete" />
                    </form>
                    </div> */}
                {/* </div> */}
                <br/>
                <br/>
     
{/* </li>
);
})}
                    </ul> */}
                    </fieldset>

                    {/* <form className="add"
                    action={`/JAguilar/new`}>
                            <input type="submit" value="New Character" />
                    </form> */}
                    </body>
                </div>
                </AppLayout>
        );
    }
}

module.exports = Index;
