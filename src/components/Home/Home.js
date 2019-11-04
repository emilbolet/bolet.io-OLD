import React, { Component } from 'react';
import { IconContext } from "react-icons";
import { FiMonitor,FiCloud,FiWifi,FiHome } from "react-icons/fi";
import './Home.css'
export class Home extends Component {
  static displayName = Home.name;
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyB8EEpxcGhgp5kH743SMtH5uBxUrU7hgVw&channelId=UCsMica-v34Irf9KVTh6xx-g&part=snippet,id&order=date&maxResults=3")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render () {
    const { error, isLoaded, items } = this.state;
    console.log(items);
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
            <h2 className="font-weight-light ">Web & Software</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab nulla dolorum autem nisi officiis blanditiis voluptatem hic, assumenda aspernatur facere ipsam nemo ratione cumque magnam enim fugiat reprehenderit expedita.</p>
          </div>
        </section>
        <section className="border-bottom section-padding">
          <div className="container">

           <div className="row text-center">
             
             <div className="col-md-3 pb-5">
             <IconContext.Provider value={{color: "#093c84" }}>
             <FiMonitor className="icon-1000"/>
             </IconContext.Provider>
             </div>
             <div className="col-md-3 pb-5">
             <IconContext.Provider value={{color: "#093c84" }}>
             <FiCloud className="icon-1000"/>
             </IconContext.Provider>
             </div>
             <div className="col-md-3 pb-5">
             <IconContext.Provider value={{color: "#093c84" }}>
             <FiWifi className="icon-1000"/>
             </IconContext.Provider>
             </div>
             <div className="col-md-3 pb-5">
             <IconContext.Provider value={{color: "#093c84" }}>
             <FiHome className="icon-1000"/>
             </IconContext.Provider>
             </div>
           </div>
          </div>
        </section>
        <section className="bg-light border-bottom section-padding text-right">
          <div className="container">
            <h2 className="font-weight-light">Recent Videos</h2>
            <div className="row">
            {items.map(item => (
              <div className="col-md-4" key={item.etag}>
                <a href={"https://www.youtube.com/watch?v=" +item.id.videoId}>
                  <img className="img-thumbnail"  src={item.snippet.thumbnails.high.url}></img>
                </a>
              </div>

            ))}
            </div>

          </div>
          
        </section>
      </div>

    );
  }
}
