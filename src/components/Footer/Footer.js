import "./Footer.css";
import Moment from 'react-moment';
import React from "react";

import { FiFacebook,FiLinkedin,FiTwitter,FiGithub } from "react-icons/fi";


export class Footer extends React.Component {
  render() {
    const dateTime = new Date().getTime();
    return (
  <footer className="footer py-4">
            <div className="container">
                  <div className="row">
                      <div className="col-sm-6 pt-3">
                          © <Moment date={dateTime} format="YYYY" /> Emil Bolet — All Rights Reserved
                      </div>
                      <div className="col-sm-6 ">
                          <ul className="list-group list-group-horizontal float-right">
                              <li className="list-group-item no-border"><a href="https://www.linkedin.com/in/emilbolet"> <FiLinkedin/> </a> </li>
                              <li className="list-group-item no-border"><a href="https://twitter.com/emilbolet"><FiTwitter/></a></li>
                              <li className="list-group-item no-border"><a href="https://www.facebook.com/emilbolet"><FiFacebook/></a></li>
                              <li className="list-group-item no-border"><a href="https://github.com/emilbolet"><FiGithub/></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
      </footer>
    );
  }
}
