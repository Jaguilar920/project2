const React = require('react');

class New extends React.Component {
    render() {
      return (
          <div>
              <h1>New Character</h1>
              <form action="/dnd" method="POST">
                  Name: <input type="text" name="name" /><br/>
                  Race: <input type="text" name="race" /><br/>
                  Class: <input type="text" name="tree" /><br/>
                  Alignment: <input type="text" name="alignment" /><br/>
                  Background: <input type="text" name="background" /><br/>
                  Tracking: <input type="checkbox" name="tracking" /><br/>
                  <input type="submit" name="" value="Create Character"/>
               </form>
          </div>);
    }
  }
  
  module.exports = New;