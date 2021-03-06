import React, { Component } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';
import Layout from './PlayerLayout';
import ControlLayout from './ControlLayout';
import PlayPause from './PlayPause';
import FullScreenButton from './FullScreenButton';
import ProgressBar from './ProgressBar';

class Player extends Component {
  state = {
    loading: true,
    paused: false,
    fullScreenOn: false,
    progress: 0,
    buffer: 0,
  }

  onBuffer = ({ isBuffering }) => {
    this.setState({ loading: isBuffering });
  }

  onLoad = () => {
    this.setState({ loading: false });
  }

  onProgress = ({ seekableDuration, playableDuration, currentTime }) => {
    const progress = currentTime / seekableDuration * 100;
    const buffer = playableDuration / seekableDuration * 100;

    this.setState({
      progress,
      buffer,
    })
  }

  playPause = () => {
    this.setState(prevState => ({
      paused: !prevState.paused,
    }));
  }

  toggleFullScreen = () => {
    this.setState(prevState => ({
      fullScreenOn: !prevState.fullScreenOn,
    }));
  }

  render() {
    return (
      <Layout
        loader={<ActivityIndicator color='red' />}
        loading={this.state.loading}
        controls={
          <ControlLayout>
            <ProgressBar
              progress={this.state.progress}
              buffer={this.state.buffer}
            />
            <PlayPause
              onPress={this.playPause}
              paused={this.state.paused}
            />
            <FullScreenButton
              onPress={this.toggleFullScreen}
              fullScreenOn={this.state.fullScreenOn}
            />
          </ControlLayout>
        }
      >
        <Video
          source={{ uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' }}
          style={styles.player}
          resizeMode='contain'
          onBuffer={this.onBuffer}
          onLoad={this.onLoad}
          paused={this.state.paused}
          fullscreen={this.state.fullScreenOn}
          onFullscreenPlayerWillDismiss={() => this.setState({ fullScreenOn: false })}
          onProgress={this.onProgress}
        />
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  player: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default Player;
