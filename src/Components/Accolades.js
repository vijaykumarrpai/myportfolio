import React, { Component } from 'react';

class Accolades extends Component {
  render() {

    if(this.props.data){
      var accolades = this.props.data.accolades.map(function(accolades){
        return  <li key={accolades.user}>
            <blockquote>
               <p>{accolades.text}</p>
               <cite>{accolades.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="accolades">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1>Accolades</h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
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