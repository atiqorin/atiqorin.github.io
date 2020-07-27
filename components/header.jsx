import anime from 'animejs'

export default class Header extends React.Component {
  componentDidMount() {
    anime({
      targets: '.name',
      translateX: [-180 + '%',0],
      duration: 1000,
      easing: 'easeInOutCubic',
    });
    anime({
      targets: '.link-icons',
      translateX: [180 + '%',0],
      duration: 1000,
      easing: 'easeInOutCubic',
    });
  }
  render() {
    return (
      <header className="container">
          <a className="name" href="#"><h1>Atiq Khan</h1></a>
          <div className="header-filler"></div>
          <div className="wrap">
            <div className="link-icons">
              <a href="http://github.com/atiqorin" className="nav-item" target="_blank">
                <span className="icon">
                  <i className="fa fa-github"></i>
                </span>
              </a>
              <a href="https://www.linkedin.com/in/atiq-khan" className="nav-item" target="_blank">
                <span className="icon">
                  <i className="fa fa-linkedin"></i>
                </span>
              </a>
            </div>
            <div className="menuIcon js-menuBtn"></div>
          </div>
          <div className="curtain"></div>
        </header>
    )
  }
}