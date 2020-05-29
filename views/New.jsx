const React = require('react');
const AppLayout =require('./AppLayout.jsx');

class New extends React.Component {
    render() {
      return (
        <AppLayout>
          <div className="container">
            <body>
              <h1>New Character</h1>
              <form action="/dnd" method="POST">
                <label className="mt-3">Name:</label>
                  <input type="text" className="CharName" name="name" /><br/>
                  <label className="mt-3">Image:</label>
                  <input type="file" className="form-control-file" name="image"  id="exampleFormControlFile1"/>
                  <label className="mt-3">Race:</label>
                  <select className="custom-select" name="race">
                    <option selected>Choose Race...</option>
                    <option value="Aasimar">Aasimar</option>
                    <option value="Dragonborn">Dragonborn</option>
                    <option value="Dwarf">Dwarf</option>
                    <option value="Gnome">Gnome</option>
                    <option value="Elf">Elf</option>
                    <option value="Halfling">Halfling</option>
                    <option value="Human">Human</option>
                    <option value="Tiefling">Tiefling</option>
                    <option value="Warforged">Warforged</option>
                  </select><br/>
                  <label className="mt-3">Class:</label>
                  <select className="custom-select" name="tree">
                    <option selected>Choose Class...</option>
                    <option value="Barbarian">Barbarian</option>
                    <option value="Bard">Bard</option>
                    <option value="Cleric">Cleric</option>
                    <option value="Druid">Druid</option>
                    <option value="Fighter">Fighter</option>
                    <option value="Monk">Monk</option>
                    <option value="Paladin">Paladin</option>
                    <option value="Ranger">Ranger</option>
                    <option value="Rogue">Rogue</option>
                    <option value="Sorcerer">Sorcerer</option>
                    <option value="Warlock">Warlock</option>
                    <option value="Wizard">Wizard</option>
                  </select>
                  <br/>
                  <label className="mt-3">Alignment:</label>
                    <select className="custom-select" name="alignment">
                        <option selected>Choose Alignment...</option>
                        <option value="Lawful Good">Lawful Good</option>
                        <option value="Neutral Good">Neutral Good</option>
                        <option value="Chaotic Good">Chaotic Good</option>
                        <option value="Lawful Neutral">Lawful Neutral</option>
                        <option value="Neutral">Neutral</option>
                        <option value="Chaotic Neutral">Chaotic Neutral</option>
                        <option value="Lawful Evil">Lawful Evil</option>
                        <option value="Neutral Evil">Neutral Evil</option>
                        <option value="Chaotic Evil">Chaotic Evil</option>
                    </select>
                    <br/>
                    <label className="mt-3">Background:</label>
                  <input type="text" className="BG" name="background" /><br/>
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
                  <input type="submit" name="" value="Create"/>
               </form>
               </body>
          </div>
          </AppLayout>
          );
    }
  }
  
  module.exports = New;