import anime from 'animejs'

export default class Skills extends React.Component {
    componentDidMount(){
        anime({
            targets: '.skill-wrapper',
            opacity: [1, 0.8, 1],
            duration: 1000,
            delay: 0.5,
            loop: true,
          });
    }
    render() {
      return (
        <div className="skill-wrapper">
            <i className={this.props.iconName} />
            <div className="skill-name">{this.props.skillName}</div>
        </div>
        
      )
    }
  }