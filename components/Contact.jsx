export default class Contact extends React.Component {
    render() {
      return (
        <section className="section">
            <div className="columns is-mobile is-centered experience-header">
                <div className="is-primary">
                <h2>Contact</h2>
                </div>
            </div>
            <div className="slide">
                <div className="container has-text-centered ">
                    <span>Let's connect on LinkedIn</span>
                    <a href="https://www.linkedin.com/in/atiq-khan" className="contact-item" target="_blank">
                        <span className="icon">
                        <i className="fa fa-linkedin"></i>
                        </span>
                    </a>
                </div>
            </div>
            <div className="slide">
                <div className="container has-text-centered ">
                    <span>Shoot me an email</span>
                    <a href="mailto:atiqkhansw@gmail.com" className="contact-item" target="_blank">
                        <span className="icon">
                        <i className="fa fa-envelope"></i>
                        </span>
                    </a>
                </div>
            </div>
        </section>
      )
    }
  }