import React, { Component } from 'react';
import { IconContext } from "react-icons";
import { FiLayers,FiCloud,FiTruck,FiCode } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './Home.css'
import me from './me.png'

let apiKey = process.env.REACT_APP_API_KEY;
export class Home extends Component {
  static displayName = Home.name;
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
  render () {
    return (
      
      <div>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 text-center">
                <h1 className="font-weight-light big-text">Let's go for the Cloud</h1>
                <p className="lead small-big-text">And build amazing things together</p>
              </div>
            </div>
          </div>
        </header>
        <section className="bg-light border-bottom section-padding">
          <div className="container">
            <div className="row"> 
              <div className="col-9">
                <h2 className="font-weight-light ">Hi, my name is Emil Ræbild Bolet </h2>
                <p>I'm {this.state.age} years old.</p>
                <p>I live in the fourth largest city in Denmark called Aalborg with my beautiful girlfriend Trine and daughter Marie.</p>
                 <p>I work at a software consulting company called Commentor as a Software Architect.</p>
                <p>My mission in life is to build amazing scalable applications that runs in the cloud. </p>
                <p>In my daily life I work with helping customers move to and build for the cloud. </p>
                <p>I love my job and I often say that I don’t work for a living, but I get paid to do my hobby. </p>
                <p>I have a sailboat and love to go sailing when I need to get disconnected and the weather allows for it. </p>
                  </div>
              <div className="col-3">
                <img src={me} alt="Me" className="img-fluid "></img>
              </div>
            </div>
          </div>
        </section>
        <section className="border-bottom section-padding">
          <div className="container">

           <div className="row text-center">
           <div className="col-md-3 pb-5">
             <Link to='/cloud-computing'>
              <IconContext.Provider value={{color: "#093c84" }}>
              <FiCloud className="icon-1000"/>
              </IconContext.Provider>
              <h5>Cloud Computing</h5>
             </Link>
             </div>

             <div className="col-md-3 pb-5">
             <Link to='/devops'>
              <IconContext.Provider value={{color: "#093c84" }}>
              <FiTruck className="icon-1000"/>
              </IconContext.Provider>
             <h5>DevOps</h5>
             </Link>
             </div>
             <div className="col-md-3 pb-5">
               <Link to="/software-development">
                <IconContext.Provider value={{color: "#093c84" }}>
                <FiCode className="icon-1000"/>
                </IconContext.Provider>
                <h5>Software Development</h5>
               </Link>
             </div>
             <div className="col-md-3 pb-5">
               <Link to='/infrastructure-as-code'>
                <IconContext.Provider value={{color: "#093c84" }}>
                <FiLayers className="icon-1000"/>
                </IconContext.Provider>
                <h5>Infrastructure As Code</h5>
               </Link>
             </div>
           </div>
          </div>
        </section>
        {/* <section className="bg-light border-bottom section-padding text-right">
          <div className="container">
            <h2 className="font-weight-light">Recent Videos</h2>
            <div className="row">
            {videos}
            </div>  
          </div>  
        </section> */}
      </div>

    );
  }
}
