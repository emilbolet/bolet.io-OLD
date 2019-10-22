import React    from "react";
import axios from 'axios';

export class Videos extends React.Component {
  state = {
    videos: [],
  }
  componentDidMount() {
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyB8EEpxcGhgp5kH743SMtH5uBxUrU7hgVw&channelId=UCR_aVx8lLR_vxI1m7S-GDxQ&part=snippet,id&order=date&maxResults=20`)
      .then(res => {
        const videos = res.data.items;
        this.setState({ videos });
      })
  }



render() {
    return (

      <div>
      { this.state.videos.map(video => 
          <div className=' video-item item'>
                <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                <div className='content'>
                    <div className='header '>{video.snippet.title}</div>
                </div>
            </div> 
        )
      }
      </div>
    )
}
}

