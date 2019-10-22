import React    from "react";
import template from "./Resume.jsx";

export class Resume extends React.Component {
  render() {
    return template.call(this);
  }
}

