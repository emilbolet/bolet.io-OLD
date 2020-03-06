import React    from "react";
import './About.css'
import me from './me.png'
export class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
    };
  }
  componentDidMount() {
      let birthday = new Date(1992,7,4).getTime();
      let now = Date.now();
      let diff = (now - birthday) / 1000;
      diff /= (60 * 60 * 24);

      this.setState({
        age:Math.abs(Math.floor(diff/365.25))
      });
  }

  render() {
    return (
      <div>
        <section className="bg-light border-bottom section-padding">
          <div className="container">
            <div className="row"> 
              <div className="col-9">
                <h2 className="font-weight-light ">Hi, my name is Emil Ræbild Bolet </h2>
                <p>I'm {this.state.age} years old.</p>
                <p>I live in the fourth largest city in Denmark called Aalborg with my beautiful girlfriend Trine and I work at a small company called Commentor A/S.</p>
                <p>My mission in life is to build amazing scalable applications that runs in the cloud. </p>
                <p>In my daily life I work with helping customers move to and build for the cloud. </p>
                <p>I love my job and I often say that I don’t work for a living, but I get paid to do my hobby. </p>
                <p>I have a sailboat and love to go sailing when I need to get disconnected and the weather allows for it. </p>
                  </div>
              <div className="col-3">
                <img src={me} alt="Me" className="img-fluid rounded-circle"></img>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

