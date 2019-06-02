import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Animated } from 'react-native';
import Layout from './MovieLayout';
import Player from '../player/Player';
import Header from '../sections/Header';
import Details from '../videos/Details';
import Back from './Back';

class Movie extends Component {
  state = {
    opacity: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(
      this.state.opacity,
      {
        toValue: 1,
        duration: 500,
      },
    ).start();
  }

  backHome = () => {
    this.props.dispatch({
      type: 'REMOVE_MOVIE',
    });
  }

  render() {
    return (
      <Animated.View
        style={{
          flex: 1,
          opacity: this.state.opacity,
        }}
      >
        <Layout>
          <Header>
            <Back onPress={this.backHome} />
          </Header>
          <Player />
          <Details {...this.props.movie} />
        </Layout>
      </Animated.View>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.selectedMovie,
});

export default  connect(mapStateToProps)(Movie);
