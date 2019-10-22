import React, { Component } from 'react';
import { FiMonitor,FiCloud,FiWifi } from "react-icons/fi";
import axios from 'axios';
import './Home.css'
export class Home extends Component {
  static displayName = Home.name;
  state = {
    videos: [],
  }
  componentDidMount() {
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyB8EEpxcGhgp5kH743SMtH5uBxUrU7hgVw&channelId=UCR_aVx8lLR_vxI1m7S-GDxQ&part=snippet,id&order=date&maxResults=20`)
      .then(res => {
        const videos = res.data.items;
        console.log(videos);
        this.setState({ videos });
      })
  }

  render () {
    return (
      <div>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 text-center">
                <h1 className="font-weight-light">Let's go for the Cloud</h1>
                <p className="lead">And build amazing things together</p>
              </div>
            </div>
          </div>
        </header>
        <section className="bg-light border-bottom section-padding">
          <div className="container">
            <h2 className="font-weight-light">Web & Software</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab nulla dolorum autem nisi officiis blanditiis voluptatem hic, assumenda aspernatur facere ipsam nemo ratione cumque magnam enim fugiat reprehenderit expedita.</p>
          </div>
        </section>
        <section className="border-bottom section-padding">
          <div className="container">
           <div className="row text-center">
             <div className="col">
             <FiMonitor className="icon-1000"/>
             </div>
             <div className="col">
             <FiCloud className="icon-1000"/>
             </div>
             <div className="col">
             <FiWifi className="icon-1000"/>
             </div>
           </div>
          </div>
        </section>
        <section className="bg-light border-bottom section-padding text-right">
          <div className="container">
            <h2 className="font-weight-light">Recent Videos</h2>
          </div>
          
        </section>
      </div>

    );
  }
}
