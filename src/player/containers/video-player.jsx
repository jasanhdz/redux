import React from 'react';
import VideoPlayerLayout from '../components/video-player-layout.jsx';
import Video from '../components/video.jsx';
import Title from '../components/title.jsx';
import PlayPause from '../components/play-pause.jsx';
import Timer from '../components/timer.jsx';
import Controls from '../components/video-player-controls.jsx';
import formattedTime from '../utilities/format-time';
import ProgresBar from '../components/progress-bar.jsx';
import Spinner from '../components/spinner.jsx';
import Volume from '../components/volume.jsx';
import FullScreen from '../components/fullscreen.jsx';
import Navegador from '../utilities/navegator';
class VideoPlayer extends React.Component {
  state = {
    pause: true,
    duration: 0,
    totalDuracion: 0,
    currentTime: 0,
    value: 0,
    time: 0,
    loading: false,
    volume: 1,
  }
  togglePlay = (event) => {
    console.log(event);
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount() {
    this.setState({
      pause: !this.props.autoplay
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      totalDuracion: this.video.duration,
      duration: formattedTime(this.video.duration),
    })
  }
  handleTimeUpdated = event => {
    // console.log(this.video.currentTime)
    this.setState({
      currentTime: formattedTime(this.video.currentTime),
      time: this.video.currentTime
    })
  }
  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }
  handleSeeking = event => {
    //buscando=seeking
    this.setState({
      loading: true,
    })
  }
  handleSeeked = event => {
    //buscado=seeked
    this.setState({
      loading: false,
    })
  }
  handleVolumeChange = event => {
    this.video.volume = event.target.value; 
  }

  handleMuteVolume = event => {
    this.video.muted = !this.video.muted;
    this.video.muted ? 
      this.setState({volume: 0})
    : this.setState({volume: 1});
  }
  handleFullScreen = event => {
    switch(Navegador()) {
      case "chrome": 
        !document.webkitIsFullScreen ?
          this.player.webkitRequestFullscreen()
        : document.webkitExitFullscreen();
        break
      case "moz":
        !this.player.mozFullScreen ?
          this.player.mozRequestFullScreen()
        : mozCancelFullScreen();
        break;
      default:
        !this.player.msFullscreenEnabled ?
          document.msRequestFullscreen()
        : document.	msExitFullscreen();
        break;
    }
  }
  setRef = element => {
    this.player = element;
  }
  render() {
    return (
      <VideoPlayerLayout 
        setRef={this.setRef}
      >
        <Title title={this.props.title}/>
        <Controls>
          <PlayPause 
            handleClick={this.togglePlay}
            pause={this.state.pause}
          />
          <Timer 
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgresBar
            duration={this.state.totalDuracion}
            value={this.state.time}
            handleChange={this.handleProgressChange}
          />
          <Volume 
            handleVolumeChange={this.handleVolumeChange}
            handleClick={this.handleMuteVolume}
            value={this.state.volume}
          />
          <FullScreen 
            handleClick={this.handleFullScreen}
          />
        </Controls>
        <Spinner 
          active={this.state.loading}
        />
        <Video 
          handleLoadedMetadata={this.handleLoadedMetadata}
          pause={this.state.pause}
          autoplay={this.props.autoplay}
          src={this.props.src}
          handleTimeUpdated={this.handleTimeUpdated}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;