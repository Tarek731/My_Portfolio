// Include React
var React = require("react");

// This is the Child component
var Child = React.createClass({

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
      <h3 className="panel-title"><bold>Diet Tracker Website Screenshots</bold></h3>
    <h5 className="desc">The APP allows you to look up nutritional information for millions of foods at the click of a button powerd by an extensive food database</h5>

    </div>
    


    <div className="glassify">
      <div class="container">
        
        <div class="row">
          <div class="col-sm-4"><img src="img/h1.png" alt="Placeholder" className="panel-glassify"></img></div>
        </div>
         
        <div class="row">
          <div class="col-sm-4"><img src="img/h2.png" alt="Placeholder" className="panel-glassify"></img></div>
        </div>
               
        <div class="row">
          <div class="col-sm-4"><img src="img/h3.png" alt="Placeholder" className="panel-glassify"></img></div>
        </div>
                
        <div class ="row">
          <div class="col-sm-4"><img src="img/h4.png" alt="Placeholder" className="panel-glassify"></img></div>
        </div>
               
        <div class="row">
          <div class="col-sm-4"><img src="img/h5.png" alt="Placeholder" className="panel-glassify"></img></div>
        </div>
             
        <div class="row">
          <div class="col-sm-4"><img src="img/h6.png" alt="Placeholder" className="panel-glassify"></img></div>
        </div>
        
      </div>
    </div>
</div> 



<div className="panel panel-default">
    <div className="panel-heading">
      <h3 className="panel-title">MovieGoers Website Screenshots</h3>
    <h5 className="desc">Website capabilities included user log-in, sign-up, and password authentication. Search an extensive database of movies with the ability to add movie titles to a saved watch-list.</h5>
    </div>
    


    <div className="glassify">
      <div class="container">
        
        <div class="row">
          <div class="col-sm-4"><img src="img/home.jpg" alt="Placeholder" className="panel-glassify"></img></div>
        </div>
         
        <div class="row">
          <div class="col-sm-4"><img src="img/m2.png" alt="Placeholder" className="panel-glassify"></img></div>
        </div>
               
        <div class="row">
          <div class="col-sm-4"><img src="img/m1.png" alt="Placeholder" className="panel-glassify"></img></div>
        </div>
                
        <div class ="row">
          <div class="col-sm-4"><img src="img/m4.png" alt="Placeholder" className="panel-glassify"></img></div>
        </div>
             
        <div class="row">
          <div class="col-sm-4"><img src="img/m3.png" alt="Placeholder" className="panel-glassify"></img></div>
        </div>
        
      </div>
    </div>
</div> 

<div className="panel panel-default">
    <div className="panel-heading">
      <h3 className="panel-title">Glassify Website Screenshots</h3>
   <h5 className="desc">Website capabilities included user log-in, sign-up, and password authentication. Provides a visual personality assesment for the user gennerating immediate job openings in the user's vicinity  complimenting the user's personality type generated by the assesment.</h5>
    </div>
    


    <div className="glassify">
      <div class="container">
        
        <div class="row">
          <div class="col-sm-4"><img src="img/g1.png" alt="Placeholder" className="panel-glassify"></img></div>
        </div>
          
        <div class="row">
          <div class="col-sm-4"><img src="img/g2.png" alt="Placeholder" className="panel-glassify"></img></div>
        </div>
               
        <div class="row">
          <div class="col-sm-4"><img src="img/g3.png" alt="Placeholder" className="panel-glassify"></img></div>
        </div>
                
        <div class ="row">
          <div class="col-sm-4"><img src="img/g4.png" alt="Placeholder" className="panel-glassify"></img></div>
        </div>
               
        <div class="row">
          <div class="col-sm-4"><img src="img/g5.png" alt="Placeholder" className="panel-glassify"></img></div>
        </div>
             
        <div class="row">
          <div class="col-sm-4"><img src="img/g6.png" alt="Placeholder" className="panel-glassify"></img></div>
        </div>
        
      </div>
    </div>
</div> 





</div>          
    );
  }
});

// Export the component back for use in other files
module.exports = Child;