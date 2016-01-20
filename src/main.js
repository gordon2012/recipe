var React = require('react');
var Home = require('./components/homePage');

(function(win)
{
  'use strict';
  var App = React.createClass
  ({
    render: function()
    {
      return (
        <div>
          <Home />
        </div>
      );
    }
  });

  React.render(<App />, document.getElementById('app'));

}(window));
