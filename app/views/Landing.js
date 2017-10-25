// Include React
var React = require("react");
var ReactDOM = require("react-dom");
var Link = require("react-router").Link;
var Child = require("../components/children/Child");
// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component

var Landing = React.createClass({
  render: function () {
    return (
<div>
    <div className="splash-container">
        <div className="splash">
            <p className="splash-head">Ideas to Reality</p>
            <p className="splash-subhead"></p>
            <p><Link to ="/Dashboard" className="pure-button pure-button-primary">Web Development Services</Link></p>
        </div>
    </div>
    <div className="content-wrapper">
        <div className="content">
        <h2 className="content-head is-center">Recent APP Productions</h2>    
        </div>
            <div className="ribbon l-box-lrg pure-g">
                <div className="l-box-lrg is-center pure-u-1 pure-u-med-1-2 pure-u-lrg-2-5">
                    <div className="pure-u-1 pure-u-med-1-2 pure-u-lrg-3-5">
                        <h2 className="content-head content-head-ribbon"><Child /></h2>
                    </div>
                </div>
            </div>
   

            <footer className ="page-footer">
         <div className="row">
            <div className="col s12 m6 l6">
               <h5 className= "white-text"></h5>
            </div>
            
            <div className= "col">
               <ul>
                  <li><Link to="#" className= "grey-text text-lighten-4 right foot">
                     Privacy and Terms</Link></li>
                  <li><Link to="#" className= "grey-text text-lighten-4 right foot">
                     User Agreement</Link></li>
               </ul>
            </div>
         </div>
         
         <div className= "footer-copyright">
            <div className= "container">
               <img src="img/react.png" alt="logo" className="logo"></img> Powered by React
              
            </div>
         </div>         
       </footer>

    </div>    
    
    

</div>




  

   
    );
  }
});






// Export the component back for use in other files


module.exports = Landing;
