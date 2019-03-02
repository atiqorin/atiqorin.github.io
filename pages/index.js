import Link from 'next/link'
import "../static/main.scss"
import Layout from '../components/Layout.js';
import ReactGA from 'react-ga';
import React from 'react'
import anime from 'animejs'

export default class Index extends React.Component {
  componentDidMount() {
    ReactGA.initialize('UA-135433826-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  onLeave(index, nextIndex, direction) {

    if (nextIndex.index == 1) {

      anime({
        targets: '.scrollDown',
        translateY: 180 + '%',
        duration: 500,
        easing: 'easeInOutCubic',
      });
    }
    if (nextIndex.index == 0) {
      anime({
        targets: '.scrollDown',
        translateY: [180 + '%', 0],
        duration: 500,
        easing: 'easeInOutCubic',
      });
    }
  }

  afterLoad(anchorLink, index) {
    if (!anchorLink) {
      anime({
          targets: '.scrollDown',
          translateY: [180 + '%', 0],
          duration: 500,
          easing: 'easeInOutCubic',
      });
  }
  }

  render() {
    return (
      <Layout>
        <header>
          <a className="name" href="./">Atiq Khan</a>
          <div className="wrap">
            <div className="icons">
              <a href="http://github.com/atiqorin" className="nav-item">
                <span className="icon">
                  <i className="fa fa-github"></i>
                </span>
              </a>
              <a href="https://www.linkedin.com/in/atiq-khan" className="nav-item">
                <span className="icon">
                  <i className="fa fa-linkedin"></i>
                </span>
              </a>
            </div>
            <div className="menuIcon js-menuBtn"></div>
          </div>
          <nav className="global-nav">
            <ul className="global-nav__list">
              <li><a href="./#/home">Home</a></li>
              <li><a href="./#about">About Me</a></li>
              <li><a href="./#skills">Skills</a></li>
              <li><a className="js-contact" href="./#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="curtain"></div>
        </header>

        <section id="section0" className="section active section-1">
          <div className="slide p-3">
            <div className="container has-text-centered ">
              <img className="avatar" src="../static/profile.jpg" />
            </div>
            <div className="container"><br />
              <div className="intro">
                <p>Hello! I am a <span style={{ color: 'rgb(92, 155, 192)' }}>software engineer</span> with an
                    insatiable desire for developing software and solving interesting problems. My journey in
                    programming started as a self-taught developer with a focus on the end-user experience
                  and creating apis.</p>
                <p>I've always considered that a specific programming language or tool doesn't limit me in my
                    passion for developing and my love to create solutions, so I constantly seek to learn
                      new technologies and keep up-to-date with industry trends and new technologies.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="section1" className="section section-2">
          <div className="slide">
            <div className="container p-3 ">
              <div className="columns is-multiline is-desktop">
                <div className="column">
                  <div className="box project-text">
                    <article>
                      <div>
                        <p>I am currently performing maintenance work on my site to reflect my
                            newly developed skill set. If you would
                            like to contact me, submit your email below and I will reach you back.
                            Don't worry, I share your dislike for
                                  spam and will respect the sanctity of your email address.</p>
                      </div>
                    </article>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        <section id="section2" className="section section-3">
          <div className="container  slide">
            <div className="p-3 has-text-centered">
              <h3 className="title is-3">Let's Socialize</h3>
            </div>
            <div className="social-container columns">
              <div className="column has-text-centered">
                <a target="_blank" href="https://www.linkedin.com/in/atiq-khan"><img className="" src="../static/linkedin.png"
                  style={{ width: '50px', height: '50px' }} /></a>
              </div>
            </div>
          </div>
        </section>
        <section id="section3">
        </section>
      </Layout>
    )
  }
}