export default class Descriptive extends React.Component {
  render() {
    return (
      <section className="section active">
        <div className="slide">
          <div className="container"><br />
            <div className="intro">
              <p>
                {this.props.description}
            </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}