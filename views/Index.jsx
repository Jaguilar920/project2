const React = require('react');
const AppLayout = require('./AppLayout.jsx');


class Index extends React.Component {
    render() {

        const { characters } = this.props;
        return (
            <AppLayout>
                <div className="container">
                    <body>
                    <fieldset class="character-info">
                    <legend><h1>Character List</h1></legend>
                    <label>{this.props.name}</label>                   
                        <ul>
                            {characters.map((character, i) => {
                                return (

<li>

           
            <img className="rounded-circle" data-src={character.img} alt=""/>
            <h3 className="CharName">{character.name}</h3>
           
        
           
                 <p className="TreeName">{character.tree}</p>
                 <div className="custom-control custom-switch">
                     <input type="checkbox" className="custom-control-input" id="customSwitch"/>
                     <label className="custom-control-label">Track Character</label>
                 </div>
                 <label className="mt-3">Level:</label>
                 <select className="custom-select levelSel" name="level">
                    <option selected>Lvl...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                  </select>
                                    <br/>
                 <div className="row">
                     <div className="col">
                    <form className="edit"
                    action={`/dnd/edit/${character._id}`}>
                    <input type="submit" value="Edit" />
                    </form>
                    </div>

                    <div className="col">
                    <form className="delete"
                    action={`/dnd/${character._id}?_method=DELETE`}
                    method="post">
                    <input type="submit" value="Delete" />
                    </form>
                    </div>
                </div>
                <br/>
                <br/>
     
</li>
);
})}
                    </ul>
                    </fieldset>

                    <form className="add"
                    action={`/dnd/new`}>
                            <input type="submit" value="New Character" />
                    </form>
                    </body>
                </div>
                </AppLayout>
        );
    }
}

module.exports = Index;
