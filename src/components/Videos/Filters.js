import React from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import { FaAngleDown,FaAngleUp } from "react-icons/fa";

export class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: 0, cards: [1, 2, 3, 4, 5] };
      }
  
      toggle(e) {
        let event = e.target.dataset.event;
        this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
      }
      render() {
        const {cards, collapse} = this.state;
        return (
          <div className="container">
              <h3 className="page-header">Filters</h3>
              {cards.map(index => {
                return (
                  <Card key={index} className="no-border">
                    <CardHeader onClick={this.toggle} className="card-header-light" data-event={index}>{"Category "+index} <FaAngleDown className="float-right"></FaAngleDown> </CardHeader>
                    <Collapse isOpen={collapse === index}>
                    <CardBody>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                Topic
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                Topic
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                Topic
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                Topic
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                Topic
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                Topic
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                Topic
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                Topic
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                Topic
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                Topic
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                Topic
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                Topic
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                Topic
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                Topic
                            </label>
                        </div>
                        
                    </CardBody>
                    </Collapse>
                  </Card>
                )
              })}     
              
            </div>  
        );
      }
}