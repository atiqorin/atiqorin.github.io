import Link from 'next/link'
import "../static/main.scss"
import Layout from '../components/Layout.js';
import ReactGA from 'react-ga';
import React from 'react'
import anime from 'animejs'
import Particles from 'react-particles-js';
import Header from '../components/header.jsx';
import Descriptive from '../components/descriptive.jsx';
import Skills from '../components/skills.jsx';
import Experience from '../components/Experience.jsx';
import Contact from '../components/Contact.jsx';


export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      link_size: 110,
    };
    
  }
  componentDidMount() {
    ReactGA.initialize('UA-135433826-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    if (window.innerWidth < 480) {
      this.setState({link_size: 60})
    }
    anime({
      targets: '.avatar',
      translateY: [-180 + '%',0],
      scale: [0.2, 1],
      duration: 1000,
      easing: 'easeInOutCubic',
    });
    anime({
      targets: '.arrow-icon',
      translateY: [-50 + '%',0],
      loop: true,
      easing: 'easeInOutCubic',
    });
  }

  render() {
    return (
      <Layout>
        <Header />
        <Particles 
          className="particle-js"
          params={{
            particles:{
              number:{
                  value:80
              },
              color:{
                  value:"#f9f3f4"
              },
              shape:{
                  type:"circle",
                  stroke:{
                      width:1,
                      color:"#ccc"
                  },
                  fill: {
                    color: "#ccc"
                  }
              },
              opacity:{
                  value:0.5,
                  random:true
              },
              size:{
                  value:1
              },
              line_linked:{
                  enable:true,
                  distance:this.state.link_size,
              },
              move:{
                  enable:true,
                  speed: 1.5
              }
          }
          }} />
        <div className="slide">
          <div className="container has-text-centered ">
            <img className="avatar" src="../static/profile.jpg" />
          </div>
        </div>
        <span className="icon arrow-icon">
          <i className="fa fa-angle-down"></i>
        </span>
        
        <Descriptive description={"Hello! I am a software engineer with a passion for developing software and solving interesting problems. My journey in programming started as a developer with a focus on the end-user experience which gradually led me dive into full stack development responsible for front-end, back-end, ui development, database scripting and creating apis."} />
      
        <Descriptive description={"I've always considered that a specific programming language or tool doesn't limit me in my passion for developing and my love towards creativity & problem solving, so I constantly seek to learn new technologies and keep up-to-date with industry trends and new technologies."} />
        <div className="columns is-mobile is-centered">
            <div className="is-primary">
              <h2>SKILLS</h2>
            </div>
        </div>
        
        <Skills />
        
        <Experience />
        <Contact />
      </Layout>
    )
  }
}