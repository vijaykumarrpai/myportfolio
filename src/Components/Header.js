import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';

class Header extends Component {
  render() {

    if(this.props.data){
       var name = this.props.data.name;
       var occupation = this.props.data.occupation;
       var description= this.props.data.description;
    }

    return (
      <header id="home">
      <ParticlesBg type="circle" bg={true} />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About me</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Work Experience</a></li>
            <li><a className="smoothscroll" href="#accolades">Accolades</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <br/>
            <h3>{occupation}.</h3>
            <br/>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
               <a href="https://github.com/vijaykumarrpai" className="button btn github-btn"><i className="fa fa-github"></i>GitHub</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;