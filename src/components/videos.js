import React from 'react';
import video from '../../data/video';
import ModalVideo from 'react-modal-video';
import './videos.css';
import ReactGoogleSlides from 'react-google-slides';

import youtubeThumbnail from 'youtube-thumbnail';

class Videos extends React.Component {
  state = {};

  componentDidMount = () => {
    for (let i = 0; i < video.length; i++) {
      this.state[i] = false;
    }
  };

  render() {
    return (
      <div>
        <h1 style={{ marginTop: '6rem' }}>Exun Videos</h1>
        <div className="vids">
          {video.map((box, index) => {
            return (
              <div className="vids-box">
                <img
                  onClick={() => {
                    this.setState({
                      [index]: true,
                    });
                  }}
                  className="vids-img"
                  src={youtubeThumbnail(box.link).high.url}
                  alt=""
                />
                <button
                  className="vids-btn"
                  onClick={() => {
                    this.setState({
                      [index]: true,
                    });
                  }}
                >
                  {box.heading}
                </button>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={this.state[index]}
                  videoId={box.youtubeId}
                  onClose={() => {
                    this.setState({
                      [index]: false,
                    });
                  }}
                />
              </div>
            );
          })}
        </div>
        <h1 style={{ marginTop: '3rem' }}>Results</h1>
        <ReactGoogleSlides
          width="800rem"
          height="480rem"
          slidesLink="https://docs.google.com/presentation/d/11Pb7aDHt38LydehkRdkVrqM-t389YLpISmbkh7H0_Is/edit?usp=sharing"
          showControls
        />
      </div>
    );
  }
}

export default Videos;
