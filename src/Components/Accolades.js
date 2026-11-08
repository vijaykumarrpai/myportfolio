import React, { Component } from 'react';

class Accolades extends Component {
  render() {

    if(this.props.data){
      var accolades = this.props.data.accolades.map(function(accolade){
        return  <li key={accolade.text}>
            <blockquote>
               <p>{accolade.text}</p>
               {accolade.user && <cite>{accolade.user}</cite>}
            </blockquote>
         </li>
      })
    }

    return (
      <section id="accolades">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1>Recognition &amp; Feedback</h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides accolades-grid">
                      {accolades}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Accolades;