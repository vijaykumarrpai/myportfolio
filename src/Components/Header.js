import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.navigationFrame = null;
    this.scheduleActiveNavigationUpdate = this.scheduleActiveNavigationUpdate.bind(this);
  }

  componentDidMount() {
    this.navigationLinks = Array.from(document.querySelectorAll('#nav li a[href^="#"]'));
    this.navigationSections = this.navigationLinks
      .map(function(link) {
        return document.getElementById(link.hash.slice(1));
      })
      .filter(Boolean);

    window.addEventListener('scroll', this.scheduleActiveNavigationUpdate, { passive: true });
    window.addEventListener('resize', this.scheduleActiveNavigationUpdate);
    window.addEventListener('hashchange', this.scheduleActiveNavigationUpdate);
    this.updateActiveNavigation();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scheduleActiveNavigationUpdate);
    window.removeEventListener('resize', this.scheduleActiveNavigationUpdate);
    window.removeEventListener('hashchange', this.scheduleActiveNavigationUpdate);

    if (this.navigationFrame !== null) {
      window.cancelAnimationFrame(this.navigationFrame);
    }
  }

  scheduleActiveNavigationUpdate() {
    if (this.navigationFrame !== null) {
      return;
    }

    this.navigationFrame = window.requestAnimationFrame(() => {
      this.navigationFrame = null;
      this.updateActiveNavigation();
    });
  }

  updateActiveNavigation() {
    if (!this.navigationSections || this.navigationSections.length === 0) {
      return;
    }

    let activeSection = this.navigationSections[0];
    const navigation = document.getElementById('nav-wrap');
    const visibleMobileToggle = navigation && Array.from(
      navigation.querySelectorAll('.mobile-btn')
    ).find(function(toggle) {
      return window.getComputedStyle(toggle).display !== 'none';
    });
    const navigationHeight = Math.max(
      navigation ? navigation.offsetHeight : 0,
      visibleMobileToggle ? visibleMobileToggle.getBoundingClientRect().height : 0
    );
    const activationPoint = navigationHeight + 64;
    const atPageBottom = window.innerHeight + window.pageYOffset >=
      document.documentElement.scrollHeight - 2;

    if (atPageBottom) {
      activeSection = this.navigationSections[this.navigationSections.length - 1];
    } else {
      this.navigationSections.forEach(function(section) {
        if (section.getBoundingClientRect().top <= activationPoint) {
          activeSection = section;
        }
      });
    }

    this.navigationLinks.forEach(function(link) {
      const isActive = link.hash === '#' + activeSection.id;
      link.parentElement.classList.toggle('current', isActive);

      if (isActive) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  render() {

    if(this.props.data){
       var name = this.props.data.name;
       var occupation = this.props.data.occupation;
       var description= this.props.data.description;
    }

    return (
      <header id="home">
      <ParticlesBg type="circle" bg={true} />
      <nav id="nav-wrap" aria-label="Main navigation">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About me</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            <li><a className="smoothscroll" href="#accolades">Recognition</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3 className="hero-role">{occupation}</h3>
            <p className="hero-summary">{description}</p>
            <hr />
            <div className="header-actions">
               <a href="https://www.linkedin.com/in/vijaykumarrpai/" className="button linkedin-btn" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i>Connect on LinkedIn</a>
               <a href="https://github.com/vijaykumarrpai" className="button github-btn" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i>View GitHub</a>
            </div>
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