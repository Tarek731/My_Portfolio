// Include React
var React = require("react");

// This is the Child component
var Services = React.createClass({

  // Here we set a generic set of states associated with our Child Component
  // getInitialState: function() {
  //   return {
  //     name: "Bob II",
  //     img: "http://www.craveonline.com/assets/mandatory/legacy/2015/10/man_file_1062872_10.jpg"
  //   };
  // },

  // Here we describe our component's render method
  render: function() {
    return (
<div>      


      

<div className="panel panel-default">
    <div className="panel-heading">
      <h3 className="panel-title">Diet Tracker Website Screenshots</h3>
    <h5 className="desc">The APP allows you to look up nutritional information for millions of foods at the click of a button powerd by an extensive food database</h5>

    </div>
    


    


</div>          
    </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Services;