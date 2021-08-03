import React    from "react";
import './About.css'
import me from './me.png'
import architect from "./badges/microsoft-certified-azure-solutions-architect-expert.png";
import developer from "./badges/microsoft-certified-azure-developer-associate.png";
import scrum from "./badges/certified-safe-5-scrum-master.png";
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
        <section className="border-bottom section-padding">
          <div className="container">
            <div className="row text-center">
              <div className="col-4">
                <a href="https://www.youracclaim.com/badges/234473e4-9da2-4551-b619-8ef075157486" target="_blank">
                  <img src={scrum} class="img-fluid" alt="Scrum"/>  
                </a>
              </div>
              <div className="col-4">
                <a href="https://www.youracclaim.com/badges/391efeb8-3b8b-43f2-84a0-115b5bc2d72c" target="_blank">
                  <img src={architect} class="img-fluid" alt="Azure Architect"/>    
                </a>
              </div>
              <div className="col-4">
                <a href="https://www.youracclaim.com/badges/97c21d3d-281a-4e85-8145-d806bd94bfd2" target="_blank">
                  <img src={developer} class="img-fluid" alt="Azure Developer"/>   
                </a>
              </div>
            </div>
            <div className="row text-right pt-5">
              <div className="col-12">
              <a href="https://www.credly.com/users/emilbolet/badges">My credly profile</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

