export default class Experience extends React.Component {
    render() {
      return (
        <section className="section">
            <div className="columns is-mobile is-centered experience-header">
                <div className="is-primary">
                <h2>EXPERIENCE</h2>
                </div>
            </div>
            <div className="slide">
                <div className="container has-text-centered ">
                    <img className="company-logo" src="../static/djpool.png" />
                    <h3 className="company-name">Digital DJ pool</h3>
                    <p className="experiecne-text">
                        Full Stack Developer for Digital DJ Pool development team. Involved in creating new features and bug fixes for the Application. Involved in gathering requirements to final delivery and maintenance. Converted .NET MVC application into Vue.JS driven application. Technologies on the project include C# ASP.NET MVC, JavaScript, TypeScript, Vue.js, jQuery, Materialize, WebAPI, SQL, Redis, Azure.
                    </p>
                </div>
            </div>
            <div className="slide">
                <div className="container has-text-centered ">
                    <img className="company-logo" src="../static/greyhound.png" />
                    <h3 className="company-name">Greyhound Lines, Inc</h3>
                    <p className="experiecne-text">
                        Full Stack Developer for the Consumer Web Application development team. Involved in creating new features and bug fixes for the Consumer Application from gathering requirements to final delivery and maintenance. Primary focus is on Greyhound.com which is responsible for eCommerce transactions and creating bus-tickets for consumers. Technologies on the project include C# ASP.NET MVC, Sitecore for Content Management, JavaScript, TypeScript, Angular, jQuery, Bootstrap, HandlebarsJS, WebAPI, SQL.
                    </p>
                </div>
            </div>
            <div className="slide">
                <div className="container has-text-centered ">
                    <img className="company-logo" src="../static/Methodist.png" />
                    <h3 className="company-name">Houston Methodist</h3>
                    <p className="experiecne-text">
                        Full Stack Developer in a team responsible for developing features and bug fixes for the front facing web application of Houston Methodist Hospital. As a Full Stack Developer I was involved in the complete software development life cycle for HoustonMethodist.org from development to delivery and deployment. Technologies used in this project are C# ASP.NET MVC, Sitecore, JavaScript, jQuery, HTML5, CSS3, Bootstrap, AngularJS, WebAPI.
                    </p>
                </div>
            </div>
        </section>
      )
    }
  }