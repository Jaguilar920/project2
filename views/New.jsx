const React = require('react');
const AppLayout =require('./AppLayout.jsx');

class New extends React.Component {
    render() {
      return (
        <AppLayout>
          <div className="container">
            <body>
              <h1>New Project</h1>
              <form action="/JAguilar" method="POST">
                <label className="mt-3">Name:</label>
                  <input type="text" className="CharName" name="name" /><br/>
                  
                    <label className="mt-3">Background:</label>
                  <input type="text" className="BG" name="background" /><br/>
                  
                  <input type="submit" name="" value="Create"/>
               </form>
               </body>
          </div>
          </AppLayout>
          );
    }
  }
  
  module.exports = New;