import React, { Component } from 'react';
import { TwitterTimelineEmbed} from 'react-twitter-embed';
import './News.css';

export class News extends Component{


    render(){
        return (
        <section className="bg-light border-bottom section-padding">
            <div className="container">
                <div className="row"> 
                    <div className="col-10 offset-1">
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="emilbolet"
                        options={{}}
                        />
                    </div>
                </div>
            </div>
        </section>
        );
    }

}
