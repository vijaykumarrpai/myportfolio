import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (project, index) {
        return (
          <div key={project.title} className="columns portfolio-item">
            <div className="item-wrap project-card">
              <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
              <div className="portfolio-item-meta">
                <h2>{project.title}</h2>
                <p>{project.category}</p>
                {project.url && <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">Explore project <i className="fa fa-external-link" aria-hidden="true"></i></a>}
              </div>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Selected AI &amp; Product Work</h1>
            <p className="section-intro">A few examples of turning complex business problems into useful, measurable solutions.</p>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;