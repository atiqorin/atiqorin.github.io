import Skill from '../components/skill.jsx';

export default class Skills extends React.Component {
    render() {
      return (
        <section className="section active">
          <div className="container">
            <Skill iconName={"devicon-javascript-plain"} skillName={"JavaScript"}/>
            <Skill iconName={"devicon-typescript-plain"} skillName={"TypeScript"}/>
            <Skill iconName={"devicon-csharp-plain"} skillName={"C#"}/>
            <Skill iconName={"devicon-dot-net-plain"} skillName={".NET"}/>
            <Skill iconName={"devicon-vuejs-plain-wordmark"} skillName={"Vue.JS"}/>
            <Skill iconName={"devicon-angularjs-plain"} skillName={"Angular"}/>
            <Skill iconName={"devicon-react-plain"} skillName={"React"}/>
            <Skill iconName={"devicon-jquery-plain"} skillName={"jQuery"}/>
            <Skill iconName={"devicon-scala-plain"} skillName={"SQL"}/>
            <Skill iconName={"devicon-devicon-plain"} skillName={"Sitecore"}/>
            <Skill iconName={"devicon-devicon-plain"} skillName={"Dapper"}/>
            <Skill iconName={"devicon-devicon-plain"} skillName={"WebAPI"}/>
            <Skill iconName={"devicon-devicon-plain"} skillName={"Azure Storage"}/>
            <Skill iconName={"devicon-redis-plain"} skillName={"Redis"}/>
            <Skill iconName={"devicon-nodejs-plain"} skillName={"NodeJS"}/>
            <Skill iconName={"devicon-sass-plain"} skillName={"SCSS"}/>
            <Skill iconName={"devicon-html5-plain"} skillName={"Html"}/>
            <Skill iconName={"devicon-css3-plain"} skillName={"CSS"}/>
            <Skill iconName={"devicon-sass-plain"} skillName={"Less"}/>
            <Skill iconName={"devicon-devicon-plain"} skillName={"Agile"}/>
            <Skill iconName={"devicon-git-plain"} skillName={"Git Flow"}/>
            <Skill iconName={"devicon-devicon-plain"} skillName={"Jira"}/>
            <Skill iconName={"devicon-devicon-plain"} skillName={"Azure DevOps"}/>
          </div>
        </section>
      )
    }
  }